import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      return; // already connected
    }

await mongoose.connect("mongodb://localhost:27017/", {
      dbName: "mydatabase",
    });

    console.log("MongoDB Connected");
  } catch (error) {
    console.log("DB Connection Error:", error);
  }
};
