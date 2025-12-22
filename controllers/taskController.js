const taskService = require('../services/taskService');

function createTask(req, res) {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ message: 'Task title is required' });
    }

    const task = taskService.createTask(title);
    res.status(201).json(task);
}

function getTasks(req, res) {
    res.json(taskService.getAllTasks());
}

function getTask(req, res) {
    const id = parseInt(req.params.id);
    const task = taskService.getTaskById(id);

    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }

    res.json(task);
}

function updateTask(req, res) {
    const id = parseInt(req.params.id);
    const updatedTask = taskService.updateTask(id, req.body);

    if (!updatedTask) {
        return res.status(404).json({ message: 'Task not found' });
    }

    res.json(updatedTask);
}

function deleteTask(req, res) {
    const id = parseInt(req.params.id);
    const deleted = taskService.deleteTask(id);

    if (!deleted) {
        return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task deleted successfully' });
}

module.exports = {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask
};
