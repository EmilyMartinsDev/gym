import { Router } from "express";
import InfoController from "./InfoController";
import { celebrate, Joi, Segments } from 'celebrate'
import { isAuthenticated } from "../../middlewares/isAuthenticated";

const routerInfoUser = Router()

routerInfoUser.post('/',


isAuthenticated,    
  InfoController.store)




export default routerInfoUser