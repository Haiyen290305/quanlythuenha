const mongoose = require("mongoose");

const NguoithueSchema = new mongoose.Schema({

    maNguoiThue: String,

    hoTen: String,

    soDienThoai: String,

    cccd: String,

    diaChi: String
});

module.exports = mongoose.model(
    "Nguoithue",
    NguoithueSchema,
    "Nguoithue"
);