const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// ======================
// CONNECT MONGODB
// ======================

mongoose.connect("mongodb://localhost:27017/qlhtctn")

.then(() => {

    console.log("Kết nối MongoDB thành công");
})

.catch((err) => {

    console.log(err);
});


// ======================
// IMPORT ROUTES
// ======================

const taikhoanRoutes = require("./routes/taikhoan");

const phongtroRoutes = require("./routes/phongtro");

const hopdongRoutes = require("./routes/hopdong");

const khunhaRoutes = require("./routes/khunha");

const nguoithueRoutes = require("./routes/nguoithue");

const hoadonRoutes = require("./routes/hoadon");

const thanhtoanRoutes = require("./routes/thanhtoan");

const danhgiaRoutes = require("./routes/danhgia");


// ======================
// API ROUTES
// ======================

app.use("/api/taikhoan", taikhoanRoutes);

app.use("/api/phongtro", phongtroRoutes);

app.use("/api/hopdong", hopdongRoutes);

app.use("/api/khunha", khunhaRoutes);

app.use("/api/nguoithue", nguoithueRoutes);

app.use("/api/hoadon", hoadonRoutes);

app.use("/api/thanhtoan", thanhtoanRoutes);

app.use("/api/danhgia", danhgiaRoutes);


// ======================
// TEST SERVER
// ======================

app.get("/", (req, res) => {

    res.send("Server đang chạy");
});


// ======================
// RUN SERVER
// ======================

app.listen(3000, () => {

    console.log("Server chạy cổng 3000");
});