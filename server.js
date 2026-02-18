import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config';
import multer from "multer";
import path from "path";



const app = express()



import { v2 as cloudinary } from 'cloudinary';
// Configuration
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret // Click 'View API Keys' above to copy your API secret
});

//connect to database secuerely
mongoose.connect(
  process.env.MONGO_URI).then(() => console.log("Connected to mongoDB")
  ).catch((err) => console.log(err)
  );

app.get('/', (req, res) => {
  res.render('index.ejs', { url: null })
})
//diskstorage
const storage = multer.diskStorage({
  // destination: './public/uploads',
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname)

    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

const imageSchema = new mongoose.Schema({
  filename:String,
  public_id:String,
  image_url:String
});

const File = mongoose.model("cloudinary",imageSchema)

app.post('/upload', upload.single('file'), async (req, res, next) => {
  const file = req.file

  const cloudinaryRes = await cloudinary.uploader.upload(file.path, {
    folder: "NodeJS_Learning_course",
  })
//save file in database 
const db = await File.create({
  filename:file.originalname,
  public_id:cloudinaryRes.public_id,
  image_url:cloudinaryRes.secure_url,
});
  res.render('index.ejs',{url:cloudinaryRes.secure_url})
  // res.json({ message: "file uploaded successful", cloudinaryRes })
})

const port = process.env.PORT || 1000;
app.listen(port, () => console.log(`app is running on port ${port}`));