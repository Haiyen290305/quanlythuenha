const mongoose = require("mongoose");

const HoadonSchema = new mongoose.Schema({

    maHoaDon: String,

    maHopDong: String,

    tongTien: Number,

    ngayLap: String,

    trangThai: String
});

module.exports = mongoose.model(
    "Hoadon",
    HoadonSchema,
    "Hoadon"
);