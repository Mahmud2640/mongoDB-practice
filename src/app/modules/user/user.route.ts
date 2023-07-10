import express from "express";
import {
  createUser,
  getAdminUsers,
  getUserById,
  getUsers,
} from "./user.controler";

const router = express.Router();

router.post("/create-user", createUser);
router.get("/get-user", getUsers);
router.get("/get-admin", getAdminUsers);
router.get("/get-user/:id", getUserById);

export default router;
