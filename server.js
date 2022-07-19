const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passportConfig = require("./lib/passportConfig");
const cors = require("cors");
const fs = require("fs");

// MongoDB
mongoose
  .connect("mongodb+srv://JobBlitz:JobBlitz@cluster0.2iofi.mongodb.net/JobBlitz?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((res) => console.log("Connected to DB"))
  .catch((err) => console.log(err));


const app = express();
const port = 8080;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(cors());
app.use(express.json());
app.use(passportConfig.initialize());

app.get('/', function(req, res, next) {
  res.send("Hello world");
});

app.use("/auth", require("./routes/authRoutes"));
app.use("/api", require("./routes/apiRoutes"));

app.listen(process.env.PORT || port, () => {
  console.log(`Server started on port ${port}!`);
});
