const Article = require('../models/Articles')

const create = (req,res)=>{
	let article = new Article({
		title: req.body.title,
		author: req.headers.userid,
		content: req.body.content,
	})

	article.save()
	 .then(doc=>{
		 res.status(200).send({message:'success',data:doc})
	 }).catch(err=>{
		 res.send(err)
	 })
}

const findall = (req,res)=>{
	console.log('masuk sini')
	Article.find()
	 .populate('author')
	 .then(docs=>{
		 res.status(200).send({message:'all articles, ', data:docs})
	 }).catch(err=>{
		 res.send(err)
	 })
}

const edit = (req,res)=>{
	Article.update({
		'_id':req.params.id
	},{
		$set: req.body
	}).then(doc=>{
		res.status(200).send({message:'success',data:doc})
	}).catch(err=>{res.send(err)})
}

const destroy = (req,res)=>{
	Article.remove({
		'_id':req.params.id
	}).then(doc=>{
		res.send({message:'succes',data:doc})
	}).catch(err=>{res.send(err)})
}

const findOne = (req,res)=>{
	Article.findOne({
		"_id":req.params.id
	}).populate('author').then(doc=>{
		res.status(200).send({message:'find one',data:doc})
	}).catch(err=>{
		res.send(err)
	})
}

module.exports = {
	create,
	findall,
	destroy,
	edit,
	findOne
}