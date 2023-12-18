import {Request, Response} from 'express'
import { CreateUserService } from '../../services/user/CreateUserService'
import { AuthUserService } from '../../services/user/AuthUserService'
import { DetailUserService } from '../../services/user/DatailUserService'
import { UpdateUserService } from '../../services/user/UpdateUserService'
class UserController{
    async store(req: Request, res: Response ){

        const {name, email, password} = req.body

        const createUserService = new CreateUserService()
        const user  = await createUserService.execute({
            name,
            email,
            password
        })
        
        return res.json(user)
    }

    async auth(req: Request, res: Response ){

        const { email, password } = req.body

        const authUserService = new AuthUserService()
        const authUser = await authUserService.execute({
            email,
            password
        })
        return res.json(authUser)
    }

    async detail(req:Request, res:Response){
    
            const userId = req.userId
    
            const datailUserService = new DetailUserService()
            const user = await datailUserService.execute({
                userId
            })
    
            return res.json(user)
        
    }

    async update(req: Request, res: Response){
        const  { name, info} = req.body
        const userId = req.userId
        const updateUserService = new UpdateUserService()
        const updatedUser = await updateUserService.execute({
            info,
            name,
            userId
        })

        return res.json(updatedUser)
    }

}

export default new UserController()