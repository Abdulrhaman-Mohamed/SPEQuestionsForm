const mongoose = require("mongoose");

const { Form, Questions, Users, Answer } = require("./Model/Schema");

mongoose.connect('mongodb://127.0.0.1:27017/FormDB')
.then(() => console.log("Connecting to DB....."))
.catch(e => console.error("Could not to connect to mongoDB..." , e));

async function saveForm(Title , ispublished ,Question )
{
    let form = new Form(
        {
            Title,
            ispublished,
            
            
        }
    );

    form.update({$push:{Questions:Question._id}})
    await form.save();
}


async function SaveQuestion(Content , Type)
{
    const Question = new Questions(
        {
            Content,
            Type
        }
    );

    await Question.save();
}


async function addQuestion(Formid , ques)
{
    await Form.findByIdAndUpdate(Formid, 
        {$push:{Questions :ques}});
}

async function CreateUser(Name , Email , phonenumber)
{
    const User = new Users(
        {
            Name,
            phonenumber,
            Email
        }
    );

    await User.save();

}

async function addFormToUser(userid , formid)
{
    await Users.findByIdAndUpdate(userid ,
        {
            $push :{Form : formid}
        });

}


async function CreateAnswer(content , userid)
{
    const answer = new Answer({
        
    });

    await answer.save();

    await answer.update({
        $push:{
            Content:content
        },
        $push:{
            User:userid
        }

    });

    
}
let ans = [{Ques :'640ddee21a76f9319f69e195' , Ans :'25'} , {Ques :'640ddee21a76f9319f69e195' , Ans :'25'} , {Ques :'640ddee21a76f9319f69e195' , Ans :'25'}];

ans.forEach(element => {
    console.log(element);
    
});
//CreateAnswer(ans , '640dfe2c9e6f2858fa643e6c');

//CreateUser('Ahmed' , 'Ahmed@gmail.com' , '011254554');
//addFormToUser('640dfe2c9e6f2858fa643e6c',['640ddf11cea07e55efd886fc']);
//addQuestion('640ddf11cea07e55efd886fc' , ['640ddee21a76f9319f69e195' , '640ddee21a76f9319f69e194']);
//SaveQuestion('What is your name' , 'Text');
//SaveQuestion('how old are you' , ' Text');

//saveForm("Welcome New Members" , false );
