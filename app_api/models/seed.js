// Import DB and trip schema
const Mongoose = require("./db");
const Trip = require("./travlr");

//Seed data from json file read.
var fs = require("fs");
var trips = JSON.parse(fs.readFileSync("./data/trips.json", "utf8"));

// Delete any existing records, then insert seed data.
const seedDB = async () => {
  await Trip.deleteMany({});
  await Trip.insertMany(trips);
};

//Close the MongoDB connection and exit
seedDB().then(async () => {
  await Mongoose.connection.close();
  process.exit(0);
});