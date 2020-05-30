const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// POST /user
router.post('/user', userController.createUser);
// GET /user
router.get('/user', userController.getAllUsers);
// GET /user/:id
router.get('/user/:id', userController.getUserById);

module.exports = router;
