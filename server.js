const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./database/database");
const router = require("./routes");
const passport = require("passport");
const session = require("express-session");
const GitHubStrategy = require("passport-github2").Strategy;

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger.json");

dotenv.config();
connectDB();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(
  session({
    secret: "VERY_SECRET_STRING",
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Z-Key"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/", router);

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
      passReqToCallback: true,
    },
    function (req, accessToken, refreshToken, profile, done) {
      try {
        console.log("passport strategy", {
          accessToken,
          refreshToken,
          profile,
          done
        });
        return done(null, profile);
      } catch (error) {
        console.error("there was an error in the strategy", error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get("/", (req, res) => {
  const message =
    req.session.user !== undefined
      ? `Logged in as ${req.session.user.displayName}`
      : "Not logged in";
  res.json({
    message,
  });
});

app.get(
  "/auth/github/callback",
  passport.authenticate(
    "github",
    { failureRedirect: "/api-docs", session: true },
    (req, res) => {
      req.session.user = req.user;
      res.redirect("/");
    }
  )
);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
