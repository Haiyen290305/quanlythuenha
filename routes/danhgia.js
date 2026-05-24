const express = require("express");
const router = express.Router();

const Danhgia = require("../models/Danhgia");


// GET

router.get("/", async (req, res) => {

    const data = await Danhgia.find();

    res.send(JSON.stringify(data, null, 2));
});


// POST

router.post("/", async (req, res) => {

    const newData = new Danhgia(req.body);

    await newData.save();

    res.json(newData);
});


// PUT

router.put("/:id", async (req, res) => {

    const updateData = await Danhgia.findByIdAndUpdate(

        req.params.id,

        req.body,

        { new: true }
    );

    res.json(updateData);
});


// DELETE

router.delete("/:id", async (req, res) => {

    await Danhgia.findByIdAndDelete(req.params.id);

    res.json({
        message: "Xóa thành công"
    });
});

module.exports = router;