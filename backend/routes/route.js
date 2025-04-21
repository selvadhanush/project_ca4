const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
dotenv.config();
import { findByIdAndDelete, findByIdAndUpdate } from '../models/books';
import author from ('./models/author.js');
import book from ('./models/books.js');

app.get("/",(req,res)=>{
    const book=(req.body);
    book=book.find();
    const author=(req.body);
    author=author.find();

})

app.post("/create",(req,res)=>{
    const book=create(book);
    await.save();
    const author=create(author);
    await.save();
})
app.post("/update/:id",(req,res)=>{
    const author=findByIdAndUpdate(req.params.id);
    await.save()
})
app.delete("delete/:id",(req,res)=>{
    const book=findByIdAndDelete(req.params.id);

})

export default(app);