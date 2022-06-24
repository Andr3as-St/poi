// const mongoose = require("mongoose");
// const Poi = require("../models/poi");
// const patraPoi = require("./patraPoi");



// const dbUrl =
//   /*process.env.DB_URL ||*/ "mongodb://localhost:27017/covid-detect";

// mongoose.connect(dbUrl, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
// });

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//   console.log("Database connected");
// });


// const seedDB = async () => {
//   Poi.insertMany(patraPoi)
//   }
  
  
// const seedDB = async () => {
//   await Poi.deleteMany({});

// seedDB().then(() => {
//   mongoose.connection.close();
// });
