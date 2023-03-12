const mongoose = require('mongoose');


const Form =  mongoose.model('Form' , new mongoose.Schema(
    {
        Title: String,
        Date:{type: Date , default: Date.now},
        ispublished : Boolean ,
        Questions : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref:'Questions'
            }
        ]
    }
));

module.exports =Form;