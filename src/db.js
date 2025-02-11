const {connect} = require('mongoose');
const connectDB = async(url)=>{
    try{
        await connect(url);
        console.log('Connected to the database');
    }
    catch(err){
        console.error(err);
    }
}
module.exports = connectDB;