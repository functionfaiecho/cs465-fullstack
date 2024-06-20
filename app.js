var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const hbs = require("hbs");
require("./app_api/models/db");

var indexRouter = require("./app_server/routes/index");
var usersRouter = require("./app_server/routes/users");
var travelRouter = require("./app_server/routes/travel");
var roomsRouter = require("./app_server/routes/rooms");
var newsRouter = require("./app_server/routes/news");
var mealsRouter = require("./app_server/routes/meals");
var contactRouter = require("./app_server/routes/contact");
var aboutRouter = require("./app_server/routes/about");
var apiRouter = require("./app_api/routes/index");

var app = express();

// Engine setup
app.set("views", path.join(__dirname, "app_server", "views"));
// Register handlebars partials (https://www.npmjs.com/package/hbs)
hbs.registerPartials(path.join(__dirname, "app_server", "views/partials"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // Update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/travel", travelRouter);
app.use("/rooms", roomsRouter);
app.use("/news", newsRouter);
app.use("/meals", mealsRouter);
app.use("/contact", contactRouter);
app.use("/about", aboutRouter);
app.use("/api", apiRouter);

// 404 Error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Handle more errors
app.use(function (err, req, res, next) {
  // Errors only in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
