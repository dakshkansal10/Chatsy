import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import cors from "cors";
import {app, server} from "./lib/socket.js";
import path from "path";

dotenv.config();

const PORT = process.env.PORT 
const __dirname = path.resolve();

app.use(cors({
  origin:'http://localhost:5173',
  credentials: true
  // methods: ['GET', 'POST', 'PUT', 'DELETE'], // or allow all: ['*']
  //   allowedHeaders: ['Content-Type', 'Authorization'] // or allow all: ['*']
})
);
app.use(cookieParser());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);


if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req,res) =>{
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () =>{
    console.log("server is running on PORT:" + PORT);
    connectDB()
});
// app.get("/api/test", (req, res) => {
//   res.json({ message: "CORS is working" });
// });


//app.use('/api/auth', authRoutes);
