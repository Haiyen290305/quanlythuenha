const express = require("express");
const router = express.Router();

const Thanhtoan = require("../models/Thanhtoan");


// GET

router.get("/", async (req, res) => {

    const data = await Thanhtoan.find();

    res.send(JSON.stringify(data, null, 2));
});


// POST

router.post("/", async (req, res) => {

    const newData = new Thanhtoan(req.body);

    await newData.save();

    res.json(newData);
});


// PUT

router.put("/:id", async (req, res) => {

    const updateData = await Thanhtoan.findByIdAndUpdate(

        req.params.id,

        req.body,

        { new: true }
    );

    res.json(updateData);
});


// DELETE

router.delete("/:id", async (req, res) => {

    await Thanhtoan.findByIdAndDelete(req.params.id);

    res.json({
        message: "Xóa thành công"
    });
});

module.exports = router;