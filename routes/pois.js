const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const ExpressError = require("../utils/ExpressError");
const Poi = require("../models/poi");
const {isLoggedIn}= require('../middleware')

router.get(
  "/",
  catchAsync(async (req, res) => {
    const pois = await Poi.find({});
    res.render("pois/index", {
      pois,
    });
  })
);

router.get(
  "/:id",
  catchAsync(async (req, res) => {
    const poi = await Poi.findById(req.params.id);
    res.render("pois/show", {
      poi,
    });
  })
);

router.get(
  "/:id/edit",isLoggedIn,
  catchAsync(async (req, res) => {
    const poi = await Poi.findById(req.params.id);
    res.render("pois/edit", {
      poi,
    });
  })
);

router.put(
  "/:id",
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const poi = await Poi.findByIdAndUpdate(id, { $inc: { rating_n: 1 } });
    req.flash("success", "΅Welcome");
    res.redirect(`/pois/${poi._id}`);
  })
);

module.exports = router;
