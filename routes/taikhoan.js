const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Taikhoan = require("../models/Taikhoan");


// ======================
// GET ALL
// ======================

router.get("/", async (req, res) => {

    const data = await Taikhoan.find();

    res.send(JSON.stringify(data, null, 2));
});


// ======================
// REGISTER
// ======================

router.post("/register", async (req, res) => {

    try {

        const { hoTen, email, matKhau } = req.body;


        // KIỂM TRA DỮ LIỆU

        if (!hoTen || !email || !matKhau) {

            return res.status(400).json({
                message: "Vui lòng nhập đầy đủ dữ liệu"
            });
        }


        // KIỂM TRA EMAIL

        const checkEmail = await Taikhoan.findOne({ email });

        if (checkEmail) {

            return res.status(400).json({
                message: "Email đã tồn tại"
            });
        }


        // HASH PASSWORD

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(
            matKhau,
            salt
        );


        // TẠO TÀI KHOẢN

        const newUser = new Taikhoan({

            maTaiKhoan: "TK" + Date.now(),

            hoTen,

            email,

            matKhau: hashedPassword,

            vaiTro: "User",

            trangThai: true
        });


        await newUser.save();


        res.json({
            message: "Đăng ký thành công"
        });

    } catch (error) {

        res.status(500).json(error);
    }
});


// ======================
// LOGIN
// ======================

router.post("/login", async (req, res) => {

    try {

        const { email, matKhau } = req.body;


        // KIỂM TRA EMAIL

        const user = await Taikhoan.findOne({ email });

        if (!user) {

            return res.status(400).json({
                message: "Email không tồn tại"
            });
        }


        // KIỂM TRA PASSWORD

        const isMatch = await bcrypt.compare(
            matKhau,
            user.matKhau
        );

        if (!isMatch) {

            return res.status(400).json({
                message: "Sai mật khẩu"
            });
        }


        // TẠO TOKEN

        const token = jwt.sign(

            {
                id: user._id,
                email: user.email
            },

            "SECRET_KEY",

            {
                expiresIn: "1d"
            }
        );


        res.json({

            message: "Đăng nhập thành công",

            token
        });

    } catch (error) {

        res.status(500).json(error);
    }
});


// ======================
// POST
// ======================

router.post("/", async (req, res) => {

    const newData = new Taikhoan(req.body);

    await newData.save();

    res.json(newData);
});


// ======================
// PUT
// ======================

router.put("/:id", async (req, res) => {

    const updateData = await Taikhoan.findByIdAndUpdate(

        req.params.id,

        req.body,

        { new: true }
    );

    res.json(updateData);
});


// ======================
// DELETE
// ======================

router.delete("/:id", async (req, res) => {

    await Taikhoan.findByIdAndDelete(req.params.id);

    res.json({
        message: "Xóa thành công"
    });
});

module.exports = router;