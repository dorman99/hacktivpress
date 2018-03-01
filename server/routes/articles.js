var controller = require('../controllers/articles')
var express = require('express');
var router = express.Router();
var auth = require('../middlewares/auth')
router
	.get('/',controller.findall)
	.get('/:id',controller.findOne)
	.post('/',auth.auth,controller.create)
	.put('/:id',auth.auth,controller.edit)
	.delete('/:id',auth.auth,controller.destroy)

module.exports = router
