const express = require('express');

const validate = require('../validate/users.validate');
const controllers = require('../controllers/controller.user');
const router = express.Router();

router.get('/', controllers.index);

router.get('/search', controllers.search);

router.get('/create', controllers.create);

router.post('/create',validate.postCreate, controllers.postCreate);

router.get('/:id', controllers.detail);

module.exports = router;
