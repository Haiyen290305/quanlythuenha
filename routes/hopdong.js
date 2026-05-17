const express = require("express");
const router = express.Router();

const Hopdong = require("../models/Hopdong");


// ======================
// GET
// ======================

router.get("/", async (req, res) => {

    const data = await Hopdong.find();

    res.send(JSON.stringify(data, null, 2));
});


// ======================
// POST
// ======================

router.post("/", async (req, res) => {

    const newData = new Hopdong(req.body);

    await newData.save();

    res.json(newData);
});


// ======================
// PUT
// ======================

router.put("/:id", async (req, res) => {

    const updateData = await Hopdong.findByIdAndUpdate(
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

    await Hopdong.findByIdAndDelete(req.params.id);

    res.json({
        message: "Xóa thành công"
    });
});

module.exports = router;