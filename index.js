const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { googleClientID, googleClientSecret } = require("./config/keys");

const app = express();

passport.use(
  new GoogleStrategy({
    clientID: googleClientID,
    clientSecret: googleClientSecret,
    callbackURL: "/auth/google/callback"
  }, (accessToken) => {
    console.log(accessToken);
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
