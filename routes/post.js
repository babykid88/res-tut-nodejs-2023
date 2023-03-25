const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/', (req,res) =>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        name: req.body.name
    });

    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
        });

});


router.get('/', (req,res)=>{
    res.send('we are on posts');
});

router.get('/specific', (req,res)=>{
    res.send('we are on specific');
});

module.exports = router;