const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// CONNECT MONGODB

mongoose.connect("mongodb://localhost:27017/qlhtctn")
.then(() => console.log("Kết nối MongoDB thành công"))
.catch(err => console.log(err));


// IMPORT ROUTES

const phongtroRoutes = require("./routes/phongtro");
const hopdongRoutes = require("./routes/hopdong");


// API

app.use("/api/phongtro", phongtroRoutes);
app.use("/api/hopdong", hopdongRoutes);


// TEST

app.get("/", (req, res) => {

    res.send("Server đang chạy");
});


// RUN SERVER

app.listen(3000, () => {

    console.log("Server chạy cổng 3000");
});