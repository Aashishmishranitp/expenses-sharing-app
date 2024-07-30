import express from 'express'
import { createGroup,getGroups } from '../controlers/groupCtrl.js';


//router object 
const grpRouter = express.Router();

//routers
// router for grp creation
grpRouter.get('/create',createGroup)

//router for get grp
grpRouter.get('/get',getGroups);

export default grpRouter