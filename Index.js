const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/FormDB')
.then(() => console.log("Connecting to DB....."))
.catch(e => console.error("Could not to connect to mongoDB..." , e));

const coursesSchema = new mongoose.Schema(
    {
        Title : String ,
        author : String,
        Date : {type : Date , default : Date.now}

    }
);

const Courses= mongoose.model('Course' , coursesSchema);

async function CreateCourse()
{
    const course = new Courses(
        {
            Title:"Java Script",
            author:"Abdulrhaman"
        }
    );

    await course.save();

}


//CreateCourse();