const express = require("express");
const http = require("http");
const { connectDB } = require("./db/dbconnection");
const config = require("./config/config")

const app = express();

// Database connection
connectDB()

// create server using http
const server = http.createServer(app);

server.listen(config.port,() =>{
    console.log("server listning port number 8080");
});