const taskService = require('../services/taskService');

class TaskController {
  getAllTasks(req, res) {
    try {
      const { priority } = req.query;
      const tasks = taskService.getAllTasks(priority);
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  getTaskById(req, res) {
    try {
      const id = parseInt(req.params.id);
      const task = taskService.getTaskById(id);
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  createTask(req, res) {
    try {
      const task = taskService.createTask(req.body);
      res.status(201).json(task);
    } catch (error) {
      if (error.message.includes('required') || error.message.includes('must be')) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  }

  updateTask(req, res) {
    try {
      const id = parseInt(req.params.id);
      const task = taskService.updateTask(id, req.body);
      res.status(200).json(task);
    } catch (error) {
      if (error.message === 'Task not found') {
        res.status(404).json({ error: error.message });
      } else if (error.message.includes('must be')) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  }

  deleteTask(req, res) {
    try {
      const id = parseInt(req.params.id);
      taskService.deleteTask(id);
      res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
      if (error.message === 'Task not found') {
        res.status(404).json({ error: error.message });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  }
}

module.exports = new TaskController();