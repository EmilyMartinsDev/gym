import { Router } from "express";
import UserController from "./UserController";
import { celebrate, Joi, Segments } from 'celebrate'
import { isAuthenticated } from "../../middlewares/isAuthenticated";

const routerUser = Router()

routerUser.post('/',
celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required()
    }
  }),
UserController.store)


routerUser.post('/session',
celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required()
    }
  }),
UserController.auth)


routerUser.put('/',
celebrate({
    [Segments.BODY]: {
        name: Joi.string().allow('').optional(),
        email: Joi.string().email().required(),
        weight: Joi.number().allow(null).optional(),
        height: Joi.number().allow(null).optional(),
        body_fat_percentage: Joi.number().allow(null).optional(),
        goal: Joi.string().valid('GAIN_MASS', 'LOSE_FAT', 'MAINTENANCE').optional(),
        training_time: Joi.number().allow(null).optional(),
        muscle_group_target: Joi.string().allow('').optional(),
        gender: Joi.string().valid('F', 'M').required(),
        age: Joi.number().allow(null).optional(),
        activity_level: Joi.number().allow(null).optional(),
        training_frequency: Joi.number().allow(null).optional(),
        average_training_time: Joi.number().allow(null).optional(),
        userId: Joi.string().required(),
      },
  }),
  UserController.update
)
routerUser.get('/me',
  isAuthenticated,
  UserController.detail
)


export default routerUser