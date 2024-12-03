// this file is for creating, configuring and running the web server

const express = require("express");  // require express library
const path = require("path");  // require path library 
const indexRouter = require("./routes/index"); // require future code in routes/index

const app = express(); // create/set up web app server

app.set("views", path.join(__dirname, "views")); // how to show web pages from the server
app.set("view engine", "hbs"); // how to show web pages from the server

// static files(css link)
const staticFileLocation = path.join(__dirname, 'public')
app.use(express.static(staticFileLocation))

app.use("/", indexRouter); // use things that came from indexRouter 


// run the server
const server = app.listen(process.env.PORT || 3000, () => {
  console.log("Express server running on port ", server.address().port);
});
