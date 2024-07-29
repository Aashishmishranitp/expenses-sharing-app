import mongoose from "mongoose";

// Schema design
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    phoneNo: { // Changed from monNo to phoneNo for clarity
        type: Number,
        required: [true, "Phone number is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    }
}, { timestamps: true });

// Export
const userModel = mongoose.model('User', userSchema); // Changed model name to 'User' for better convention

export default userModel;
