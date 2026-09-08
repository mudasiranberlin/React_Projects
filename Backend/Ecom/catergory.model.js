import mongoose from "mongoose";
const catergorySchema = new mongoose.Schema({
    

},{timestamps:true})

export const Catergory = mongoose.model("Catergory",catergorySchema)