const mongoose = require("mongoose");

const HopdongSchema = new mongoose.Schema({
    maHopDong: String,
    maNguoiThue: String,
    maPhong: String,
    ngayBatDau: String,
    ngayKetThuc: String
});

module.exports = mongoose.model(
    "Hopdong",
    HopdongSchema,
    "Hopdong"
);