const taskService = require('../services/taskService');

function createTask(req, res) {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ message: 'Task title is required' });
    }

    try {
        const task = taskService.createTask(title);
        res.status(201).json(task);
    } catch (err) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

function getTasks(req, res) {
    try {
        res.json(taskService.getAllTasks());
    } catch (err) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

function getTask(req, res) {
    const id = parseInt(req.params.id);
    try {
        const task = taskService.getTaskById(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(task);
    } catch (err) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

function updateTask(req, res) {
    const id = parseInt(req.params.id);
    try {
        const updatedTask = taskService.updateTask(id, req.body);
        res.json(updatedTask);
    } catch (err) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

function deleteTask(req, res) {
    const id = parseInt(req.params.id);
    try {
        taskService.deleteTask(id);
        res.json({ message: 'Task deleted successfully' });
    } catch (err) {
        res.status(err.status || 500).json({ message: err.message });
    }
}

module.exports = {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask
};
