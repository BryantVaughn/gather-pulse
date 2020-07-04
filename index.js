const express = require("express");
const mongoose = require("mongoose");

const { mongoURI } = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(
  mongoURI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);

const app = express();
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
