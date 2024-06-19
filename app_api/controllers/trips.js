const mongoose = require("mongoose");
const Trip = require("../models/travlr");
const Model = mongoose.model("trips");

const tripsList = async (req, res) => {
  const q = await Model.find({}) // No filter, return all records
    .exec();

  // console.log(q);

  if (!q) {
    // Database returned no data
    return res.status(404).json(err);
  } else {
    // Return resulting trip list
    return res.status(200).json(q);
  }
};

const tripsFindByCode = async (req, res) => {
  const q = await Model.find({ code: req.params.tripCode }) // No filter. All results will come back.
    .exec();

  // console.log(q);

  if (!q) {
    // Database has returned no data
    return res.status(404).json(err);
  } else {
    // Returns resulting trip list
    return res.status(200).json(q);
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
};