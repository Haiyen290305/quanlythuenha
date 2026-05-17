const express = require("express");
const router = express.Router();

const TaiKhoan = require("../models/Taikhoan");

// GET ALL
router.get("/", async (req, res) => {
    const data = await TaiKhoan.find();
    res.json(data);
});

// GET BY ID
router.get("/:id", async (req, res) => {
    const data = await TaiKhoan.findById(req.params.id);
 res.send(JSON.stringify(data, null, 2));
});

// CREATE
router.post("/", async (req, res) => {
    const newData = new TaiKhoan(req.body);
    await newData.save();
    res.json(newData);
});

// UPDATE
router.put("/:id", async (req, res) => {
    const updateData = await TaiKhoan.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(updateData);
});

// DELETE
router.delete("/:id", async (req, res) => {
    await TaiKhoan.findByIdAndDelete(req.params.id);

    res.json({
        message: "Xóa thành công"
    });
});

module.exports = router;