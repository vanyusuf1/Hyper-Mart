require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch(console.log("Db got oops"));

const port = process.env.PORT || 8000;
const admin=(req,res=>{
  return res.send("this is admin dashboard.")
});
    


app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
