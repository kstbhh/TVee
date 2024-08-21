const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const http = require("http");
const mongoose = require("mongoose");
require('dotenv').config({path: __dirname + '/.env'});

const app = express();

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser);

const port = process.env.PORT || 50000

const server = http.createServer(app);

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MongoDB");
    server.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((err) => {
    console.log(err);
    process.exit(1);
});