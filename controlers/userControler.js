import userModel from "../models/userModel.js"

// login callback
const loginControler = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email, password })
        if (!user) {
            return res.status(404).send("User not found")
        }
        res.status(200).json({
             success: true, user 
            });
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}

//regiter callback
const registeControler = async(req,res) => {
    try {
        const newUse = new userModel(req.body)
        await newUse.save()
        res.status(201).json({
            success:true,
            newUse

        })
    } catch (error) {
        res.status(400).json({
          success:false,
            error
        })
    }
 }

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password'); // Exclude the password field for security
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users', error });
  }
};




export { loginControler, registeControler,getAllUsers }