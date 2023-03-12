const mongoose = require('mongoose');



const Questions = mongoose.model('Question' , new mongoose.Schema(
    {
        Date:{type: Date , default: Date.now},
        Content : String,
        Type: String  
    }
));


module.exports =Questions;