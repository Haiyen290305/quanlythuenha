const mongoose = require("mongoose");

const ThanhtoanSchema = new mongoose.Schema({

    maThanhToan: String,

    maHoaDon: String,

    soTien: Number,

    ngayThanhToan: String,

    phuongThuc: String
});

module.exports = mongoose.model(
    "Thanhtoan",
    ThanhtoanSchema,
    "Thanhtoan"
);