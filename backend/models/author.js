const mongoose=require('mongoose');

const userAuthor=new mongoose.Schema({
    "name":"String",
    "nationality":"String",
})

const UserModel=mongoose.model("author",userAuthor);
module.exports=UserModel;