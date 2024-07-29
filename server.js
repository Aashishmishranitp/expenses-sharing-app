import express from 'express'
import cors from 'cors'
import morgan  from 'morgan';
import dotenv from 'dotenv'
import connectDB from './config/connectDB.js';
// import colors from 'colors'
// import { connect } from 'mongoose'
// import connectDB from './config/connectDB.js'





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
app.use('/api/v1/users',require('./routes/userRoute.js') )

// port 
const PORT = 8080 || process.env.PORT



// listen server

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})