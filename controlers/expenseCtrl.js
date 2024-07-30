import expenseModel from "../models/expenseModel.js"
import balenceModel from "../models/balenceModel.js";


// for adding a new expense
const addExpense = async (req, res) => {
    const { group_id, description, total_amount, paid_by, split_method, splits, participants } = req.body;
  
    const expense = new expenseModel({ group_id, description, total_amount, paid_by, split_method, splits, participants });
  
    try {
      const newExpense = await expense.save();
      await updateBalances(newExpense); // Update balances after creating an expense
      res.status(201).json(newExpense);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

// for getting all expense 

const getAllExpenses = async (req, res) => {
    try {
      const expenses = await expenseModel.find()
                                    .populate('paid_by')
                                    .populate('splits.user_id')
                                    .populate('participants.user_id');
      res.json(expenses);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  

  // for indivisual user
  const getUserExpenses = async (req, res) => {
    const userId = req.params.userId;
  
    try {
      const expenses = await expenseModel.find({ 'participants.user_id': userId })
                                    .populate('paid_by')
                                    .populate('splits.user_id')
                                    .populate('participants.user_id');
      res.json(expenses);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  

  const downloadBalanceSheet = async (req, res) => {
    const groupId = req.query.groupId;
  
    try {
      const balances = await balenceModel.find({ group_id: groupId })
                                    .populate('user_id')
                                    .populate('balances.with_user_id');
      const balanceSheet = balances.map(balance => {
        return {
          user: balance.user_id.name,
          balances: balance.balances.map(b => ({
            withUser: b.with_user_id.name,
            balance: b.balance
          }))
        };
      });
  
      // Logic to generate a downloadable file (e.g., CSV)
      res.json(balanceSheet); // For simplicity, returning JSON
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
    
export {getAllExpenses,addExpense,getUserExpenses,downloadBalanceSheet}