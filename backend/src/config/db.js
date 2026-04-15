import mongoose from "mongoose";

async function connectDB() {
  const connectionString = process.env.MONGODB_URI;

  if (!connectionString) {
    throw new Error("MONGODB_URI is not configured");
  }

  await mongoose.connect(connectionString);
}

export default connectDB;