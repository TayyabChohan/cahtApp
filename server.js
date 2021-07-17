"use strict";
const express = require("express");
const app = express();
const chatApp=require('./app')
app.use(express.static('public'))
app.set("view engine", "ejs");
app.use('/',chatApp.router)

app.listen(3000, () => {
  console.log("app is runnidddddddddddddddddddddng at 3000");
});
