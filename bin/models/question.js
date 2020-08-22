const mongoose = require('mongoose')

const Schema= mongoose.Schema


const question=new Schema({
  name:{
    type:String,required:true
  },
  options:{
    type:String,required:true
  },
  correct_option:{
    type:Number,required:true
  },
  quiz:{
    type:Number,required:true
  },
  points:{
    type:Number,required:true
  }
},{timestamps:true})


module.exports=mongoose.model('Question',question);