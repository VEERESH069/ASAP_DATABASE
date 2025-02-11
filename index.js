const express = require('express');
const connectDB = require('./src/db');
const app = express();
require('dotenv').config({path:'./src/.env'});
const PORT = process.env.PORT //8080
const url = process.env.MONGO_URI 
app.get('/',(req,res)=>{
    res.send('I am connected to the database')
});

app.listen(PORT,async()=>{
    try{
        await connectDB(url);
            console.log(`Server is running on port ${PORT}`);
        
    }
        catch(err){
            console.error(err); 
    }
});