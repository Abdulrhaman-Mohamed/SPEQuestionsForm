const mongoose = require('mongoose');




const Users = mongoose.model('User', new mongoose.Schema({
    Name:String,
    Email: String,
    phonenumber:String,
    Form:[{
        type : mongoose.Schema.Types.ObjectId,
        ref:'Form'
    }]
}));




module.exports =Users;