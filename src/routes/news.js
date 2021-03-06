const express = require('express');

const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// router.use('/khoa-hoc', newsController.showCourses)
router.get('/khoa-hoc', newsController.showCourses);

router.get('/', newsController.index);

module.exports = router;
