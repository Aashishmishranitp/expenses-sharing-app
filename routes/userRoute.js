import express from 'express'
import { loginControler,registeControler } from '../controlers/userControler.js';

// router Object

const router = express.Router();

// routers
// POST || login use
router.post('/login',loginControler)

// POST || register usr
router.post('/register',registeControler)
export default router