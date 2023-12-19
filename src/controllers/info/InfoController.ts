import {Request, Response} from 'express'
import CreateUserInfoService from '../../services/info/CreateUserInfoService'

class InfoUserController{
    async store(req: Request, res: Response ){

        const {data} = req.body
        const userId = req.userId
        const createUserInfo = new CreateUserInfoService()
        const user  = await createUserInfo.execute({
           ...data, userId
        })
        
        return res.json(user)
    }



}

export default new InfoUserController()