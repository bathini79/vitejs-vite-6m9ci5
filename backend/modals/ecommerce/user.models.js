import mongoose from "mongoose";

const userShema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            lowercase:true
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase:true
        },
        password:{
            type: String,
            required: true,
        }

    },{timestamps:true}
    )

const User = mongoose.model("User",userShema)