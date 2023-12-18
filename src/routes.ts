import { Router } from "express";
import routerUser from "./controllers/usuario/routes";
const router = Router()

router.use('/user', routerUser)


export default router