import multer from 'multer';
import {GridFsStorage} from 'multer-gridfs-storage';
import dotenv from 'dotenv';


dotenv.config(); //initialized env

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
    url:`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.g1vsz8w.mongodb.net/`,
   options: { useUnifiedTopology: true, useNewUrlParser: true},
   file: (request, file) => {
    const match = ["image/jpeg", "image/jpg", "image/png"];
    if(match.indexOf(file.mimeType) === -1) {
        return `${Date.now()}-file-${file.originalname}`;
   }
   return{
    bucketName : "photos",
    filename :  `${Date.now()}-file-${file.originalname}`
   }
}
});

export default multer({storage});