// web servers recieve requests from clients usually web browsers this file figures out what the client wants, and responds by sending an appropriate web page.

const express = require("express");
const router = express.Router(); // create router

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/calculate", (req, res) => {
  console.log(req.query);
  // {height: '25}
const userDataObject = req.query // this allows us to access the data recieved from the client
const weight = userDataObject.weight // get the weight so we can do math
const height = userDataObject.height // get the height so we can do math

const bmi = weight / (height * height) // let bmi be the math to figure out body mass index 

  res.render("calculate.hbs" , {bmi: bmi}); // make sure to include bmi here
});

module.exports = router;
