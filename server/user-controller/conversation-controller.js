import { response } from "express";
import Conversation from "../model/Conversation.js";



export const newConversation = async(request, response) =>{
    try {
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;
        const exist = await Conversation.findOne({ members: {$all: [receiverId, senderId]}});

        if(!exist){
            const newConversations = new Conversation({
                members: [receiverId, senderId]
            })
            await newConversations.save();
            return response.status(200).json({mess:'conversation created successfully!'});
        }

     
        return response.status(300).json('Conversation already exist..!');
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const getConversation = async(request, response) =>{
    try {
// console.log(request);
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;
    let conversation =  await Conversation.findOne({members: {$all: [receiverId, senderId]}});
      return response.status(200).json(conversation);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}