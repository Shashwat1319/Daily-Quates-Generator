
import cors from "cors";
import DbConnect from "./Config/Dbconfig.js";
import dotenv from "dotenv"
import router from "./routes/auth.route.js"
import express from "express";
dotenv.config()
DbConnect()

const app = express();
app.use(express.json())
app.use(cors())

app.use("/api/auth",router)
const port = process.env.PORT

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})