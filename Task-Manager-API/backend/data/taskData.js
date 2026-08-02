let tasks = [
  { id: 1, title: "Finish lecture 2 homework", completed: false, priority: "high" },
  { id: 2, title: "Review Express routing", completed: true, priority: "medium" },
  { id: 3, title: "Set up .env file", completed: false, priority: "low" },
  { id: 4, title: "Push project to GitHub", completed: false, priority: "high" }
];

let nextId = 5;

module.exports = {
  tasks,
  nextId,
  getTasks: () => tasks,
  getTaskById: (id) => tasks.find(task => task.id === id),
  addTask: (task) => {
    task.id = nextId++;
    tasks.push(task);
    return task;
  },
  updateTask: (id, updates) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
      Object.assign(task, updates);
      return task;
    }
    return null;
  },
  deleteTask: (id) => {
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
      tasks.splice(index, 1);
      return true;
    }
    return false;
  },
  filterByPriority: (priority) => {
    return tasks.filter(task => task.priority === priority);
  },
  resetTasks: () => {
    tasks = [
      { id: 1, title: "Finish lecture 2 homework", completed: false, priority: "high" },
      { id: 2, title: "Review Express routing", completed: true, priority: "medium" },
      { id: 3, title: "Set up .env file", completed: false, priority: "low" },
      { id: 4, title: "Push project to GitHub", completed: false, priority: "high" }
    ];
    nextId = 5;
  }
};