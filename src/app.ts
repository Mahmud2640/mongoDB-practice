import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema } from "mongoose";
import { model } from "mongoose";

const app: Application = express();

// using cors
app.use(cors());

// paser data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  // insert data to database

  // Step 1: Creating Interface

  interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permarentAddress: string;
  }

  // Step 2: Creating Schema

  const userSchema = new Schema<IUser>({
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    name: {
      firstName: { type: String, required: true },
      middleName: { type: String },
      lastName: { type: String, required: true },
    },
    dateOfBirth: { type: String },
    gender: { type: String, enum: ["male", "female"] },
    email: { type: String },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permarentAddress: { type: String, required: true },
  });
  const User = model<IUser>("User", userSchema);

  const createUserToDB = async () => {
    const user = new User({
      id: "123456789",
      role: "student",
      password: "123456789",
      name: {
        firstName: "Abdullahl",
        middleName: "Al",
        lastName: "Mahmud",
      },
      dateOfBirth: "1998-01-01",
      gender: "male",
      email: "mahmud@gmail.com",
      contactNo: "01700000000",
      emergencyContactNo: "01700000000",
      presentAddress: "Dhaka",
      permarentAddress: "Dhaka",
    });
    await user.save();
    console.log(user);
  };
  createUserToDB();
});

export default app;
