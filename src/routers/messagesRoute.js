const express = require('express');
const Message = require('../models/messageModel');

const router = new express.Router();

router.post("/new-message", async (req, res) => {
    const message = new Message({
        title: req.body.title,
        body: req.body.body
    });
    try {
        await message.save();
        res.send(message);
    } catch (err) {
        console.log(err);
    }
});

router.get("/messages", async (req, res) => {
    try {
        const messages = await Message.find({});
        if (messages) res.send(messages);
        else res.send([]);
    } catch (err) {
        console.log(err);
    }
});

router.get("/", (req, res) => {
    res.send("ok");
});

module.exports = router;