const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PoiSchema = new Schema({
  id: {
    type: "String",
  },
  name: {
    type: "String",
  },
  address: {
    type: "String",
  },
  types: {
    type: ["String"],
  },
  coordinates: {
    lat: {
      type: "Number",
    },
    lng: {
      type: "Number",
    },
  },
  rating: {
    type: "Number",
  },
  rating_n: Number,
  populartimes: {
    type: ["Mixed"],
  },
  time_spent: {
    type: ["Number"],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Poi", PoiSchema);
