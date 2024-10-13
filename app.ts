import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/database';
import logger from './src/middleware/logger';
// import cors from 'cors';

const app = express()
app.use(express.json())
// app.use(cors())
app.use(logger);
dotenv.config();


app.use(express.json());
app.get("/",(req,res)=>{
    res.status(200).send({"msg":"welcome to Ravi API"})
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,async()=>{
    try{
        await connectDB
        console.log("Connected to Database")
    }
    catch(err){
        console.log(err)
        console.log("connection failed")
    }
    console.log("Listning on Port")
})