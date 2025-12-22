const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');

router.post('/', createSafe(taskController.createTask));
router.get('/', createSafe(taskController.getTasks));
router.get('/:id', createSafe(taskController.getTask));
router.put('/:id', createSafe(taskController.updateTask));
router.delete('/:id', createSafe(taskController.deleteTask));

function createSafe(handler) {
    if (typeof handler !== 'function') {
        throw new Error('Route handler is undefined. Check controller exports.');
    }
    return handler;
}

module.exports = router;
