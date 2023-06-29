const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


// Load environment variables from .env file
dotenv.config();

//create express app
const app = express();


mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB connection successful"))
.catch((err) => console.log(err));

app.use(express.json());
  
//middleware
const bkRouter= require('./routes/books');
app.use('/books',bkRouter);      //for all bk reqst send that to bkrouter const
 


// Serve static files from the "public" directory
app.use(express.static('public'));


//listen reqst
app.listen(process.env.PORT ,() =>{
    console.log(`Backend server is running at ${process.env.PORT}!`);
});

