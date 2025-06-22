const express = require("express");
const helmet = require("helmet");
const dotenv = require("dotenv");
const server = express();
dotenv.config();

//port
const port = process.env.PORT;

//middlewares
server.use(helmet());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

//routes

server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
