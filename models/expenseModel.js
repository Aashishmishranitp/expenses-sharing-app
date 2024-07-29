import mongoose from "mongoose";


const splitSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number },
    percentage: { type: Number }
  });
  
  const participantSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount_owed: { type: Number, required: true }
  });

const expenseSchema = new mongoose.Schema({

        group_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Group', required: true },
        description: { type: String, required: true },
        total_amount: { type: Number, required: true },
        paid_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        date: { type: Date, default: Date.now },
        split_method: { type: String, enum: ['equal', 'percentage', 'exact'], required: true },
        splits: [splitSchema],
        participants: [participantSchema]

},{timestamps:true})

const expenseModel = mongoose.model('Transection', expenseSchema)

export default expenseModel