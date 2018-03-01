var controller = require('../controllers/articles')

var express = require('express');
var router = express.Router();

router
	.get('/')
	.get('/:id')
	.put('/:id')
	.delete('/:id')

module.exports = router
