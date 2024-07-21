import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import router from './Routes/Route.mjs';

const app = express();

const port=process.env.PORT||3000
const uri=process.env.MongoDBURL;
//use middlewares
app.use(express.json());
//connect db
const connectDB=async()=>{
    try{
        await mongoose.connect(uri);
        console.log('connected to your Database');
    }
    catch(err)
    {
        console.log(err);
    }
}
connectDB();
//use router middleware
app.use('/url',router);
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
