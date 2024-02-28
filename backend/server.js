
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import { app, server } from "./socket/socket.js";
import ConnectToMongoDB from "./db/connectToMongoDB.js";


const PORT = process.env.PORT || 5000; // Using port 8080 as an example
dotenv.config();

app.use(express.json()); // to handle the incoming requests with JSON  (from req.body)

app.use(cookieParser()); 



app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


server.listen(PORT, () => {
  ConnectToMongoDB(); 
  console.log(`Server is running on port ${PORT}`)
});