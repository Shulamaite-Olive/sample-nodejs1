const Task = require('../models/taskModel');

let tasks = [];
let taskId = 1;

function createTask(title) {
    const task = new Task(taskId++, title, false);
    tasks.push(task);
    return task;
}

function getAllTasks() {
    return tasks;
}

function getTaskById(id) {
    return tasks.find(t => t.id === id) || null;
}

function updateTask(id, data) {
    const task = getTaskById(id);
    if (!task) return null;

    if (data.title !== undefined) task.title = data.title;
    if (data.completed !== undefined) task.completed = data.completed;

    return task;
}

function deleteTask(id) {
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) return null;

    tasks.splice(index, 1);
    return true;
}

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
};
