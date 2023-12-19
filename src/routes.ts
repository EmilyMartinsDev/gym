import { Router } from "express";
import routerUser from "./controllers/usuario/routes";
import routerInfoUser from "./controllers/info/routes";
const router = Router()

router.use('/wizard', routerInfoUser)
router.use('/user', routerUser)


export default router