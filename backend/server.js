import express from "express";
import dotenv from "dotenv/config";
import viewEngine from "./viewEngine.js";
import initWebRoute from "./route/webRoute.js";
// import path from 'path';


const app = express();
const port = process.env.port;
viewEngine(app);
// app.use(express.static(path.join(__dirname,'public')))
initWebRoute(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

