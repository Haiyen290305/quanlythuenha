const mongoose = require("mongoose");

const DanhgiaSchema = new mongoose.Schema({

    maDanhGia: String,

    maNguoiThue: String,

    maPhong: String,

    soSao: Number,

    noiDung: String
});

module.exports = mongoose.model(
    "Danhgia",
    DanhgiaSchema,
    "Danhgia"
);