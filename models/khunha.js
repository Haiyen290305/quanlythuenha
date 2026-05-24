const mongoose = require("mongoose");

const KhunhaSchema = new mongoose.Schema({

    maKhuNha: String,

    tenKhuNha: String,

    diaChi: Object,

    moTa: String,

    trangThai: String
});

module.exports = mongoose.model(
    "Khunha",
    KhunhaSchema,
    "Khunha"
);