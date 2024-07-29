import mongoose from "mongoose";

const balenceSchem = new mongoose.Schema({
    group_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Group', required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    balances: [{
      with_user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      balance: { type: Number, required: true }
    }]

})

const balenceModel = new mongoose.Schema('Balence',balenceSchem);

export default balenceModel;