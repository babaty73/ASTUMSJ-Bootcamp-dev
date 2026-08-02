const API_BASE = 'http://localhost:5000/api/tasks';

const taskContainer = document.getElementById('taskContainer');
const addForm = document.getElementById('addTaskForm');
const titleInput = document.getElementById('taskTitle');
const prioritySelect = document.getElementById('taskPriority');
const filterSelect = document.getElementById('filterPriority');
const refreshBtn = document.getElementById('refreshBtn');

async function fetchAPI(url, options = {}) {
  try {
    const res = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `HTTP ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.error('API Error:', err);
    alert(`⚠️ ${err.message || 'Something went wrong'}`);
    return null;
  }
}

async function loadTasks() {
  const priority = filterSelect.value;
  const url = priority === 'all' ? API_BASE : `${API_BASE}?priority=${priority}`;
  const data = await fetchAPI(url);
  if (data) renderTasks(data);
}

function renderTasks(tasks) {
  if (!tasks || tasks.length === 0) {
    taskContainer.innerHTML = `<div class="empty-state"><i class="fas fa-inbox"></i><p>No tasks found</p></div>`;
    return;
  }
  
  taskContainer.innerHTML = tasks.map(task => `
    <div class="task-item" data-id="${task.id}">
      <div class="task-title">
        <span>${escapeHtml(task.title)}</span>
        <span class="priority-badge priority-${task.priority}">${task.priority}</span>
      </div>
      <div class="task-meta">
        <span><i class="fas fa-${task.completed ? 'check-circle' : 'circle'}"></i> ${task.completed ? 'Done' : 'Pending'}</span>
        <span><i class="far fa-id-card"></i> #${task.id}</span>
      </div>
      <div class="task-actions">
        <button class="btn btn-success toggle-btn" data-id="${task.id}" data-completed="${task.completed}">
          <i class="fas fa-${task.completed ? 'undo' : 'check'}"></i> ${task.completed ? 'Undo' : 'Done'}
        </button>
        <button class="btn btn-danger delete-btn" data-id="${task.id}"><i class="fas fa-trash"></i> Delete</button>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.id;
      const current = btn.dataset.completed === 'true';
      const updated = await fetchAPI(`${API_BASE}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ completed: !current })
      });
      if (updated) loadTasks();
    });
  });

  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.id;
      if (!confirm('Delete this task?')) return;
      const result = await fetchAPI(`${API_BASE}/${id}`, { method: 'DELETE' });
      if (result) loadTasks();
    });
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

addForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = titleInput.value.trim();
  const priority = prioritySelect.value;
  if (!title) return alert('Title is required');
  const newTask = await fetchAPI(API_BASE, {
    method: 'POST',
    body: JSON.stringify({ title, priority, completed: false })
  });
  if (newTask) {
    titleInput.value = '';
    prioritySelect.value = 'medium';
    loadTasks();
  }
});

filterSelect.addEventListener('change', loadTasks);
refreshBtn.addEventListener('click', loadTasks);

loadTasks();