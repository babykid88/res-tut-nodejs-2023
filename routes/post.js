const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/', async (req,res) =>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        name: req.body.name
    });
    try {
    const savedPost = await post.save();
        res.json(savedPost);
    } catch(err) {
            res.json({message: err});
        }    
});

router.get('/', async (req,res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);
    } catch(err){
        res.json({message:err});
    }
});

router.get('/specific', (req,res)=>{
    res.send('we are on specific');
});

module.exports = router;