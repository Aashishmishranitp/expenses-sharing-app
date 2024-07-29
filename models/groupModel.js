import mongoose from "mongoose";

const groupSchem = new mongoose.Schema({

    group_name:{
        type:String,
        required:[true,"group name is needed"]
    },
    members: [{
      user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    //   joined_at: { type: Date, default: Date.now }
    }],

},{timestamps:true})

const groupModel = new mongoose.model('Group',groupSchem);

export default groupModel