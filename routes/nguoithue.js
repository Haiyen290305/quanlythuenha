const express = require("express");
const router = express.Router();

const Nguoithue = require("../models/Nguoithue");


// GET

router.get("/", async (req, res) => {

    const data = await Nguoithue.find();

    res.send(JSON.stringify(data, null, 2));
});


// POST

router.post("/", async (req, res) => {

    const newData = new Nguoithue(req.body);

    await newData.save();

    res.json(newData);
});


// PUT

router.put("/:id", async (req, res) => {

    const updateData = await Nguoithue.findByIdAndUpdate(

        req.params.id,

        req.body,

        { new: true }
    );

    res.json(updateData);
});


// DELETE

router.delete("/:id", async (req, res) => {

    await Nguoithue.findByIdAndDelete(req.params.id);

    res.json({
        message: "Xóa thành công"
    });
});

module.exports = router;