import expenseModel from "../models/expenseModel.js"



const getAllTransation = async(req,res) => {

    try {
        const transtation = await transectionModel.find({})
        res.status(200).json(transtation)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
        
    }

}

const addTransction =async(req,res) => {
    try {
        const newTrasection = new transectionModel(req.body);

        await newTrasection.save()
        res.status(201).send("Transection Created")
        
    } catch (error) {
        console.log(error)
        res.status(400).json(error)

        
    }
  
}


export {getAllTransation,addTransction}