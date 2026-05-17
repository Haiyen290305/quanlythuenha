const mongoose = require("mongoose");

const TaiKhoanSchema = new mongoose.Schema({
    maTaiKhoan: String,
    hoTen: String,
    email: String,
    matKhau: String,
    vaiTro: String,
    trangThai: Boolean
});

module.exports = mongoose.model("Taikhoan", TaiKhoanSchema, "Taikhoan");