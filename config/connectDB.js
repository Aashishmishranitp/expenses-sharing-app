import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
    console.log(`Server Running on ${mongoose.connection.host}`);
        
    } catch (error) {
        console.log(`${error}`.bgRed)
    }
}

export default connectDB