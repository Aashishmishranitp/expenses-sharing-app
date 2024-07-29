import mongoose, { mongo } from "mongoose";


// schema design

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,"name is required"],

    },
    email:{
        type:String,
        required:[true,"Email is required and should be unique"],
        unique:true
    },
    monNo:{
        type:Number,
        required:true,

    },
    password: {
        type:String,
        required:[true,"password is required"]
    }
},{timestamps:true})

// export 

const userModel = mongoose.model('user',userSchema)

export default userModel
