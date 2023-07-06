import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
const server = express();
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";
import router from "../Routes/index.js";
import { isHttpError } from "http-errors";

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE, PATCH"
  );
  next();
});

server.use(json());

server.use("/", router);

// eslint-disable-next-line no-unused-vars
server.use((error, req, res, next) => {
  console.error(error);
  let errorMessage = "Unknown error ocurred";
  let statusCode = 500;
  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }
  res.status(statusCode).json({ error: errorMessage });
});

export default server;
