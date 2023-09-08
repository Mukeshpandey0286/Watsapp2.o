import mongoose from "mongoose"
import  dotenv  from "dotenv";

dotenv.config(); //initialized env

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

 const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.g1vsz8w.mongodb.net/`
const Connection = async() =>{
        try{
               await mongoose.connect(URL, {useUnifiedTopology: true});
               console.log("successful..!!");
        } catch(error){
                console.log("eror",);
                console.log('ERROR ',error.message);
        }
}
export default Connection;