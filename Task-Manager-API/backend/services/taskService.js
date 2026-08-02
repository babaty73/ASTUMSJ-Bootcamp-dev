const taskStore = require('../data/taskData');

class TaskService {
  getAllTasks(priority) {
    if (priority) {
      return taskStore.filterByPriority(priority);
    }
    return taskStore.getTasks();
  }

  getTaskById(id) {
    return taskStore.getTaskById(id);
  }

  createTask(taskInput) {
    // Validate required fields
    if (!taskInput.title) {
      throw new Error('Title is required');
    }
    if (!taskInput.priority || !['low', 'medium', 'high'].includes(taskInput.priority)) {
      throw new Error('Priority must be low, medium, or high');
    }

    const newTask = {
      title: taskInput.title,
      completed: taskInput.completed || false,
      priority: taskInput.priority
    };

    return taskStore.addTask(newTask);
  }

  updateTask(id, updates) {
    // Validate priority if provided
    if (updates.priority && !['low', 'medium', 'high'].includes(updates.priority)) {
      throw new Error('Priority must be low, medium, or high');
    }

    const task = taskStore.updateTask(id, updates);
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  }

  deleteTask(id) {
    const deleted = taskStore.deleteTask(id);
    if (!deleted) {
      throw new Error('Task not found');
    }
    return true;
  }
}

module.exports = new TaskService();