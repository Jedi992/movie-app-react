import { Router } from "express"
import userController from "../controller/userController.ts"
import authMiddleware from "../middleware/auth-middleware.ts"
export const router = Router()

router.post("/registration", userController.registration)
router.post("/login", userController.login)
router.post("/logout", userController.logout)
router.post("/profile",authMiddleware ,userController.profile)
