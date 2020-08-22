const mongoose = require('mongoose')

const Schema= mongoose.Schema


const quiz=new Schema({
  id:{
    type:Integer,required:true
  },
  name:{
    type:String,required:true
  },
  description:{
    type:String,required:true
  }
},{timestamps:true})



module.exports=mongoose.model('Quiz',quiz)