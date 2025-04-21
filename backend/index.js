const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
dotenv.config();
import { Router } from 'express';
import route from './routes/route'
import author from ('./models/author');
import book from ('./models/books');

const app=express();
app.use(cors);
app.use(express.json());

app.connect(process.env.MONGO_URI)

app.use("/api/library",'./routes/route');

app.listen(5000,(req,res)=>{
    console.log("server is running")
});