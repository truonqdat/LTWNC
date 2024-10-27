import express from "express";
import dotenv from "dotenv/config";
import viewEngine from "./viewEngine.js";
import initWebRoute from "./route/webRoute.js";
import initApiRoute from "./route/apiRouter.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import bodyParser from "body-parser";
import RedisStore from "connect-redis";
import session from "express-session";
import { createClient } from "redis";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = process.env.port;

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
let redisClient = createClient();
redisClient.connect().catch(console.error);

let redisStore = new RedisStore({
  client: redisClient,
  prefix: "myapp:",
});

app.use(
  session({
    store: redisStore,
    resave: false,
    saveUninitialized: false,
    secret: "keyboard cat",
  })
);
viewEngine(app);
app.use(express.static(path.join(__dirname, "public")));
initApiRoute(app);
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
