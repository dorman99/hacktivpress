const Article = require('../models/Articles')

const create = (req,res)=>{
	let article = new Article({
		title: req.body.title,
		author: req.headers.id,
		content: req.body.content,

	})
}

const findall = (req,res)=>{
	Article.find()
	 .populate('author')
	 .then(docs=>{
		 res.status(200).send({message:'all articles, ', data:docs})
	 }).catch(err=>{
		 res.send(err)
	 })
}

module.exports = {
	create
}