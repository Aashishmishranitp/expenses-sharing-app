import express from 'express'
import { getAllUsers, loginControler,registeControler } from '../controlers/userControler.js';

// router Object

const router = express.Router();

// routers
// POST || login use
router.post('/login',loginControler)

// POST || register usr
router.post('/register',registeControler)

// router for all users
router.get('./all-user',getAllUsers)
export default router