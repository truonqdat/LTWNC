import express from "express";
import getAboutPage from "../Controller/AboutController.js";
import ApiUserController from "../Controller/ApiUserController.js";
import ApiGroupController from "../Controller/ApiGroupController.js";
import ApiProductController from "../Controller/ApiProductController.js";
import getContactPage from "../Controller/ContactController.js";
import middleware from "../middleware.js";
const router = express.Router();
const initApiRoute = (app) => {
    router.get('/get-all-users', ApiUserController.getAllUsers);
    router.get('/get-all-groups', ApiGroupController.getAllGroups);
    router.get('/get-detail-user', ApiUserController.detailUser);
    router.get('/get-list-product/:id', ApiProductController.getProductWithGroup);
    router.get('/get-detail-product/:id', ApiProductController.getDetailProduct);
    router.post('/sign-in', ApiUserController.signIn);
    router.post('/log-out', ApiUserController.logout);
    router.post('/sign-up', ApiUserController.addUser);
    router.put('/update-user/:id', middleware.checkUser, ApiUserController.updateUser);
    router.delete('/delete-user/:id', middleware.checkUser, ApiUserController.deleteUser);
    router.get('/get-all-users', ApiUserController.getAllUsers);
    return app.use('/api', router);
}

export default initApiRoute
