const mongoose = require('mongoose');


const Answer = mongoose.model('Answer' , new mongoose.Schema(
    {
        Date:{type: Date , default: Date.now},
        Content : [          
                {
                Ques : {
                    type : mongoose.Schema.Types.ObjectId,
                    ref:'Questions'
                },
                Ans : {
                    type : String 
                }
            }          
        ],
        User:{
            type : mongoose.Schema.Types.ObjectId,
            ref:'Users'
        }
    }
));

module.exports =Answer;