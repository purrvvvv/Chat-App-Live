import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import ConnectToMongoDB from "./db/connectToMongoDB.js";


const app = express();
const PORT = process.env.PORT || 5000; // Using port 8080 as an example
dotenv.config();

app.use(express.json()); // to handle the incoming requests with JSON  (from req.body)

app.get("/", (req, res) => {
  res.send("Hello World hyyy");
});
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  ConnectToMongoDB(); 
  console.log(`Server is running on port ${PORT}`)
});