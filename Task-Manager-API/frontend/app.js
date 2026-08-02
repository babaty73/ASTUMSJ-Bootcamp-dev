const API_BASE = 'http://localhost:5000/api/tasks';
const taskContainer = document.getElementById('taskContainer');
const addForm = document.getElementById('addTaskForm');
const titleInput = document.getElementById('taskTitle');
const prioritySelect = document.getElementById('taskPriority');
const filterSelect = document.getElementById('filterPriority');
const refreshBtn = document.getElementById('refreshBtn');
const statusMessage = document.getElementById('statusMessage');
let statusTimeout = null;

function setStatus(message, type = 'info', autoHide = false) {
  if (!statusMessage) return;

  if (!message) {
    clearTimeout(statusTimeout);
    statusMessage.textContent = '';
    statusMessage.style.display = 'none';
    return;
  }

  statusMessage.textContent = message;
  statusMessage.style.display = 'block';
  statusMessage.style.padding = '0.75rem 1rem';
  statusMessage.style.marginTop = '0.75rem';
  statusMessage.style.borderRadius = '6px';
  statusMessage.style.fontSize = '0.95rem';

  if (type === 'success') {
    statusMessage.style.background = '#e9f7ef';
    statusMessage.style.color = '#1b6f3b';
    statusMessage.style.border = '1px solid #b8e1c8';
  } else if (type === 'error') {
    statusMessage.style.background = '#fdecea';
    statusMessage.style.color = '#b42318';
    statusMessage.style.border = '1px solid #f1b7b2';
  } else {
    statusMessage.style.background = '#eaf2ff';
    statusMessage.style.color = '#1d4ed8';
    statusMessage.style.border = '1px solid #c7d8ff';
  }

  if (autoHide && (type === 'success' || type === 'info')) {
    clearTimeout(statusTimeout);
    statusTimeout = setTimeout(() => {
      if (statusMessage) {
        statusMessage.textContent = '';
        statusMessage.style.display = 'none';
      }
    }, 2500);
  }
}

async function fetchAPI(url, options = {}) {
  try {
    const res = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });

    let data = null;
    const text = await res.text();

    if (text) {
      try {
        data = JSON.parse(text);
      } catch {
        data = text;
      }
    }

    if (!res.ok) {
      const errMessage = (data && (data.error || data.message)) || text || `HTTP ${res.status}`;
      throw new Error(errMessage);
    }

    return data;
  } catch (err) {
    console.error('API Error:', err);
    setStatus(`⚠️ ${err.message || 'Something went wrong'}`, 'error');
    return null;
  }
}

async function addTask(task) {
  return fetchAPI(API_BASE, {
    method: 'POST',
    body: JSON.stringify(task)
  });
}

async function getTasks(priority = 'all') {
  const url = priority === 'all' ? API_BASE : `${API_BASE}?priority=${priority}`;
  return fetchAPI(url);
}

async function updateTask(id, updates) {
  return fetchAPI(`${API_BASE}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(updates)
  });
}

async function deleteTask(id) {
  return fetchAPI(`${API_BASE}/${id}`, { method: 'DELETE' });
}

window.taskData = { addTask, getTasks, updateTask, deleteTask };

async function loadTasks() {
  if (!filterSelect) return null;

  const priority = filterSelect.value;
  const data = await getTasks(priority);

  if (Array.isArray(data)) {
    renderTasks(data);
    return data;
  }

  if (data) {
    setStatus('Could not load tasks from the server.', 'error');
  }

  return null;
}

function renderTasks(tasks) {
  if (!taskContainer) return;

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

      const updated = await updateTask(id, { completed: !current });
      if (updated) loadTasks();
    });
  });

  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.id;
      if (!confirm('Delete this task?')) return;

      const result = await deleteTask(id);
      if (result) loadTasks();
    });
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

if (addForm) {
  addForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = titleInput ? titleInput.value.trim() : '';
    const priority = prioritySelect ? prioritySelect.value : 'medium';

    if (!title) {
      setStatus('Title is required.', 'error');
      return;
    }

    setStatus('Adding task...', 'info');

    const newTask = await addTask({
      title,
      priority,
      completed: false
    });

    if (newTask) {
      if (titleInput) titleInput.value = '';
      if (prioritySelect) prioritySelect.value = 'medium';
      setStatus('Task added successfully.', 'success', true);
      await loadTasks();
    } else {
      setStatus('Failed to add task. Check the API server.', 'error');
    }
  });
}

if (filterSelect) {
  filterSelect.addEventListener('change', loadTasks);
}

if (refreshBtn) {
  refreshBtn.addEventListener('click', loadTasks);
}

loadTasks();