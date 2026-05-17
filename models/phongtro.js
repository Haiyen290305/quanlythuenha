const mongoose = require("mongoose");

const PhongtroSchema = new mongoose.Schema({
    maPhong: String,
    maKhuNha: String,
    tenPhong: String,
    giaPhong: Number,
    trangThai: String
});

module.exports = mongoose.model(
    "Phongtro",
    PhongtroSchema,
    "Phongtro"
);