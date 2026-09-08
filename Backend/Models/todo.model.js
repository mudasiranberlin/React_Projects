import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    content:{
        type: String,
        lowercase: true,
        required : true
    },
    complete:{
        type: Boolean,
        default:false,
        required: true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    subTodos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubTodo"
        }
    ] // Array of Subtodos

},{timestamps:true})

export const Todo = mongoose.model("Todo",todoSchema)