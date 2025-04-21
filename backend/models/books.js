const mongoose=require('mongoose');

const userBook=new mongoose.Schema({
    "name":"String",
    "genre":"String",
    "author":"Boolean"
})

const UserModel=mongoose.model("book",userBook);
module.exports=UserModel;