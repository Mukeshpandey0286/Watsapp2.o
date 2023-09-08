import express  from "express";
import mongoose from "mongoose";
import {AddUser, getUsers}  from "../user-controller/userController.js";
import { newConversation, getConversation } from "../user-controller/conversation-controller.js";
import { getMessages, newMessage } from "../user-controller/message-controller.js";
import { uploadFile, getImage } from "../user-controller/image-controller.js";
import upload from "../utils/upload.js";


const route = express.Router();

route.post('/add', AddUser);
route.get('/users', getUsers);

route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);

route.post('/message/add', newMessage);
route.get('/message/get/:id', getMessages);


route.post('/file/upload', upload.single("file"), uploadFile);
route.get('/file/:filename', getImage);


export default route;