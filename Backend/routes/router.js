import express from "express";
import { addModel, getAllModels, upload } from "../imageModel/imageController.js";

const Router = express.Router();

Router.post('/addModel', upload.single("model"), addModel); 
Router.get('/getAllModels', getAllModels); 

export default Router;
