const mongoose = require('mongoose');
const { stringify } = require('querystring');
mongoose.connect('mongodb://127.0.0.1:27017/Test_Operation')
.then(() => console.log("Connecting to DB....."))
.catch(e => console.error("Could not to connect to mongoDB..." , e));

const Movies =  mongoose.model('Movie' , new mongoose.Schema(
    {
        Title: String,
        Date:{type: Date , default: Date.now},
        ispublished : Boolean ,
        Description : String ,
        Image : String
    }
));


async function saveMovie()
{
    const Movie = new Movies(
        {
            Title:"Find Fish Nemo",
            ispublished: false,
            Description:"Searching Nemo",
            Image:"Null"
        }
    );
    await Movie.save();
}

async function FindDoc()
{
   const Movie = await Movies.find({})
    .sort({Title:1})
    .select({Title : 1 , Description:1});
    console.log(Movie);

}

FindDoc();
