import express from "express";
import {
  loginController,
  registerController,
  registerQuery,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// register
router.post("/register", registerController);

// login
router.post("/login", loginController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//consultancy form
router.post("/", registerQuery);

export default router;
