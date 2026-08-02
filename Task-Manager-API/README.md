# Task Manager API

A simple task management REST API with a small frontend interface for creating, viewing, updating, and deleting tasks.

## Project Structure

- `backend/` - Express.js API server
- `frontend/` - Static frontend UI for the task manager
- task-manager-api/
├──`backend/`
│   ├── .env
│   ├── index.js
│   ├── config/
│   │   └── env.js
│   ├── data/
│   │   └── taskData.js
│   ├── services/
│   │   └── taskService.js
│   ├── controllers/
│   │   └── taskController.js
│   └── routes/
│       └── taskRoutes.js
├── `frontend/`
│   ├── index.html
│   ├── style.css
│   └── app.js
└── README.md

## Features

- Get all tasks
- Get a single task by ID
- Create a new task
- Update task completion or priority
- Delete a task
- Filter tasks by priority

## Backend Setup

1. Open the backend folder:
   ```bash
   cd Task-Manager-API/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```

The API will run on:
- `http://localhost:5000`

## API Endpoints

### Get all tasks
```http
GET /api/tasks
```

### Get tasks by priority
```http
GET /api/tasks?priority=high
```

### Get a single task
```http
GET /api/tasks/:id
```

### Create a task
```http
POST /api/tasks
Content-Type: application/json
```

Example body:
```json
{
  "title": "Buy groceries",
  "priority": "high",
  "completed": false
}
```

### Update a task
```http
PATCH /api/tasks/:id
Content-Type: application/json
```

### Delete a task
```http
DELETE /api/tasks/:id
```

## Frontend Setup

1. Open the frontend folder:
   ```bash
   cd Task-Manager-API/frontend
   ```
2. Open `index.html` in your browser or serve the folder with a static server.

## Notes

- The current backend stores tasks in memory, so they will reset when the server restarts.
- The frontend expects the backend to be running at `http://localhost:5000`.
