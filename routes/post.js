const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
// Submit posts
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
// Get back all the posts
router.get('/', async (req,res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);
    } catch(err){
        res.json({message:err});
    }
});
// Get specific post
router.get('/:postId', async (req,res)=>{
   // console.log(req.params.postId);
   try{
   const post = await Post.findById(req.params.postId);
   res.json(post);
    } catch(err){
        res.json({message:err});
    }
});

router.get('/specific', (req,res)=>{
    res.send('we are on specific');
});

// Delete post
router.delete('/:postId', async (req,res)=>{
    // console.log(req.params.postId);
    try{
    const removepost = await Post.findOneAndRemove(req.params.postId);
    //const removepost = await Post.remove({_id: req.params.postId});
    res.json(removepost);
     } catch(err){
         res.json({message:err});
     }
 });

module.exports = router;