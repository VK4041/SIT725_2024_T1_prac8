const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
//Routing GET and POST

router.get('/', projectController.renHtml);

router.get('/cities', projectController.getProject);

router.post('/cities', projectController.createProject);

// router.get()
module.exports = router;