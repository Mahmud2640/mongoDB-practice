import { Request, Response, NextFunction } from "express";
import {
  createUserToDB,
  getAllAdminUserFromDB,
  getUserByIdFromDB,
  getUsersFromDB,
} from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const user = await createUserToDB(data);
  res.status(200).json({
    message: "User created successfully",
    data: user,
  });
};
export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getUsersFromDB();
  res.status(200).json({
    message: "Get All Users successfully",
    data: user,
  });
};
export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const user = await getUserByIdFromDB(id);
  res.status(200).json({
    message: "Get User By Id successfully",
    data: user,
  });
};
export const getAdminUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getAllAdminUserFromDB();
  res.status(200).json({
    message: "Get Admin User successfully",
    data: user,
  });
};
