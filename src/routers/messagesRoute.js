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
        res.send(messages);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;