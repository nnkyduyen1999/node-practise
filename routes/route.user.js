const express = require('express');

const validate = require('../validate/users.validate');
const controllers = require('../controllers/controller.user');
const router = express.Router();

var multer  = require('multer');
var upload = multer({ dest: './public/uploads/' });

router.get('/', controllers.index);

router.get('/search', controllers.search);

router.get('/create', controllers.create);

router.post('/create', upload.single('avatar'), validate.postCreate, controllers.postCreate);

router.get('/:id', controllers.detail);



module.exports = router;
