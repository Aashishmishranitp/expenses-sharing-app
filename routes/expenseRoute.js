import express from 'express'
import { addExpense, downloadBalanceSheet, getAllExpenses, getUserExpenses } from '../controlers/expenseCtrl.js';

//route object
const trouter = express.Router();

// routes
//add transection
trouter.post('/add',addExpense)

// get individual expense
trouter.get('/user/:userId',getUserExpenses)

//get all expense 
trouter.get('/get', getAllExpenses)

//download balence sheet
trouter.get('./download', downloadBalanceSheet)

export default trouter