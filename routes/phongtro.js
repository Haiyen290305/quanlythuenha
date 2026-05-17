const express = require("express");
const router = express.Router();

const Phongtro = require("../models/Phongtro");


// ======================
// GET ALL
// ======================

router.get("/", async (req, res) => {

    const data = await Phongtro.find();

    res.send(JSON.stringify(data, null, 2));
});


// ======================
// GET BY ID
// ======================

router.get("/:id", async (req, res) => {

    const data = await Phongtro.findById(req.params.id);

    res.json(data);
});


// ======================
// POST
// ======================

router.post("/", async (req, res) => {

    const newData = new Phongtro(req.body);

    await newData.save();

    res.json(newData);
});


// ======================
// PUT
// ======================

router.put("/:id", async (req, res) => {

    const updateData = await Phongtro.findByIdAndUpdate(
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

    await Phongtro.findByIdAndDelete(req.params.id);

    res.json({
        message: "Xóa thành công"
    });
});

module.exports = router;