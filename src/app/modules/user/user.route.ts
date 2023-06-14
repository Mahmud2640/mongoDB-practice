import express from "express";
import { createUser, getUserById, getUsers } from "./user.controler";

const router = express.Router();

router.post("/create-user", createUser);
router.get("/get-user", getUsers);
router.get("/get-user/:id", getUserById);

export default router;
