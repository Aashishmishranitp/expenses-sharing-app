import groupModel from "../models/groupModel.js";


const createGroup = async (req, res) => {
  const { group_name, members } = req.body;

  const group = new groupModel({ group_name, members });

  try {
    const newGroup = await group.save();
    res.status(201).json(newGroup);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getGroups = async (req, res) => {
  try {
    const groups = await groupModel.find().populate('members.user_id');
    res.json(groups);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export {createGroup,getGroups}