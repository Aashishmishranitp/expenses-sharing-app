import express from 'express'
import { addTransction, getAllTransation } from '../controlers/expenseCtrl.js';

//route object
const trouter = express.Router();

// routes
//add transection
trouter.post('/add-expense',addTransction)

//get transection 
trouter.get('/get-expense', getAllTransation)

export default trouter