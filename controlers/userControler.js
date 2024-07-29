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

export { loginControler, registeControler }