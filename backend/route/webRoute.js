import express from "express";
import getHomePage from "../controllers/HomeController.js";
import aboutPage from "../controllers/AboutController.js";
import contactPage from "../controllers/ContactController.js";
import getAllUser from "../controllers/userController.js";

const router = express.Router();
const initWebRoute = (app) => {
 router.get('/', getHomePage)

 router.get('/about', aboutPage)

 router.get('/contact', contactPage)

 router.get('/user', getAllUser)
 

 return app.use('/', router)

};
 
export default initWebRoute;