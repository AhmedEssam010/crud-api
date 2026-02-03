const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/products", productRoute);




app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose.connect("mongodb+srv://ahmedeldweek:Ahmed215%23%2A@crudapi.uf0w8bp.mongodb.net/Node-API?appName=crudapi")
  .then(() => {
    console.log("Connected to database!");
    app.listen(4000, () => {
      console.log("Server is running on port 4000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });