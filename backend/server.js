const express = require("express")
const path = require("path")
const app = express()
const PORT = 3000

app.use(express.json());
// API route


// Frontend (build)
app.use(express.static(path.join(__dirname, "../frontend/dist")))

app.use((req,res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"))
})


app.listen(PORT, (res,req) => {
    console.log("server is running")
})
