const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/FormDB')
.then(() => console.log("Connecting to DB....."))
.catch(e => console.error("Could not to connect to mongoDB..." , e));

const Form =  mongoose.model('Form' , new mongoose.Schema(
    {
        Title: String,
        Date:{type: Date , default: Date.now},
        ispublished : Boolean 
    }
));

const Questions = mongoose.model('Question' , new mongoose.Schema(
    {
        Date:{type: Date , default: Date.now},
        Content : String,
        Type: String  
    }
));

const Answer = mongoose.model('Answer' , new mongoose.Schema(
    {
        Date:{type: Date , default: Date.now},
        Content : String 
    }
));

const Users = mongoose.model('User', new mongoose.Schema({
    Name:String,
    Email: String,
    phonenumber:String
}));