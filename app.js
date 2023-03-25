const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//import routes
const postsRoute = require('./routes/post');
app.use('/posts', postsRoute);

//Routes
app.get('/', (req,res)=> {
    res.send('we are on home');
});
app.get('/posts', (req,res)=> {
    res.send('we are on posts');
});
//connect to db
mongoose.connect(process.env.DB_CONNECTION);
//start listening to the server
app.listen(3000);