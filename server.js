import express from 'express'
import cors from 'cors'
import morgan  from 'morgan';
import dotenv from 'dotenv'
import connectDB from './config/connectDB.js';
// import colors from 'colors'


// routes import
import router from './routes/userRoute.js';
import trouter from './routes/expenseRoute.js';
import grpRouter from './routes/groupeRoute.js';




// config dot env file
dotenv.config();

//connect DB
connectDB()

// rest object
const app = express();


// middlewares 
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())



// routes
//user routes
app.use('/api/v1/users', router )
// transection route
app.use("/api/v1/expense",trouter)
// group route
app.use("/api/v1/groups",grpRouter)



// port 
const PORT = 8080 || process.env.PORT



// listen server

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})