const messageModel = require("../Models/messageModel");

const createMessage =async(req, res) =>{
    const {chatId, sendId, text} =req.body

    const message = new messageModel({
        chatId, sendId, text
    })
}