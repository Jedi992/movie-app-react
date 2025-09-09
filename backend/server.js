require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const router = require("./router/index");
const errorMiddleware = require("./middleware/error-middleware");

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api", router);
app.use(errorMiddleware);

// API route

// Frontend (build)
// app.use(express.static(path.join(__dirname, "../frontend/dist")))

// app.use((req, res) => {
//     res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"))
// })

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Подключение к MongoDB✅")
        app.listen(PORT, (res, req) => {
            
            console.log(`server is running ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
