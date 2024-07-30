import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import HomePage from './Pages/HomePage.js'
import Layout from './Components/Layouts/Layout.js'
import LoginUser from './Pages/Login.js'
// import SignUp from './Pages/SignUp.js'
import SignUp from './Pages/SignUp.js'
import Group from './Pages/GroupPage.js'
import AllExpenses from './Pages/AllExpense.js'
import UserExpenses from './Pages/userExpense.js'
import BalanceSheet from './Pages/BalanceSheet.js'
import CreateGroup from './Pages/CreateGrp.js'
import AddExpense from './Pages/AddExpense.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HomePage />} />
      <Route path='/login' element={<LoginUser/>}/>
      <Route path='/signup' element={<SignUp/>} />
      <Route path="/group/:id" element={<Group/>} />
      <Route path="/expenses/all" exact element={<AllExpenses/>} />
      <Route path="/expenses/user/:userId" element={<UserExpenses/>} />
      <Route path="/balence-sheet" element={<BalanceSheet />} />
      <Route path='/group/create' element={<CreateGroup/>} />
      <Route path='/expense/add' element={<AddExpense/>} />
      
    </Route>

  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
