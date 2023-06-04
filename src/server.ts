import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

// Connect to MongoDB
async function database() {
  try {
    await mongoose.connect(
      "mongodb+srv://mdmahmud484:mahmud123456789@demo.lhtbyli.mongodb.net/demo"
    );
    console.log(`Database connection successful`);
    app.listen(port, () => {
      console.log(`Server app listening on port ${port}`);
    });
  } catch (err) {
    console.log(`Failed to connect to database`, err);
  }
}
database();
