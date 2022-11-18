"use strict";
import mongoose from 'mongoose';
const Schema=mongoose.Schema;

const studentSchema=new Schema(
    {
     _id:{
        type:Number,
        required:true,
        unique:true
     },
     first_name:String,
     last_name:String,
     class:String,
     blood_group:String,
     batch:String,
     email:String,
     phone:Number,
     deleted:{
        type:Boolean,
        default:false
      }
},
{timestamps:true}

)
export default mongoose.model("Student",studentSchema);