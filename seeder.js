const fs = require("fs");
const dotenv = require("dotenv");
// Database
const database = require("./models/connect");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Load models
const Poi = require("./models/poi");

// Read JSON files
const poiData = JSON.parse(fs.readFileSync(`./seeds/patra-poi.json`, "utf-8"));

// Insert data
const importData = async () => {
  try {
    await Poi.create(poiData);
    console.log("Data inserted...");
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await Poi.deleteMany();
    console.log("Data deleted...");
    process.exit();
  } catch (err) {
    console.error(err);
  }
};
console.log(process.argv[2]);
const main = async () => {
  await database();
  if (process.argv[2] === "-i") {
    await importData();
  } else if (process.argv[2] === "-d") {
    await deleteData();
  }
};

main().then();
