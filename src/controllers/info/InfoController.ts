import {Request, Response} from 'express'
import CreateUserInfoService from '../../services/info/CreateUserInfoService'

class InfoUserController{
    async store(req: Request, res: Response ){

        const {data} = req.body
        const createUserInfo = new CreateUserInfoService()
        const user  = await createUserInfo.execute({
           ...data, userId:req.userId
        })
        
        return res.json(user)
    }

    async index(req: Request, res: Response){
        const userId = req.userId
        
    }



 }

export default new InfoUserController()