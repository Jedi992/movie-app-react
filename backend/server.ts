import "dotenv/config"
import express from "express"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import {router} from "./router/index.ts"
import errorMiddleware from "./middleware/error-middleware.ts"
import authMiddleware from "./middleware/auth-middleware.ts"
import path from "path";
import cors from "cors"
import { fileURLToPath } from 'url';

const app = express();
 const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5000",
    credentials: true,
}));   
app.use("/api", router);
app.use(errorMiddleware);

// Frontend (build)
app.use(express.static(path.join(__dirname, "../frontend/dist")))

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"))
})



const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Подключение к MongoDB✅")
        app.listen(PORT, () => {
            
            console.log(`server is running ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();