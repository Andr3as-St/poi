const { mongoose } = require('mongoose');

const dbUri = 'mongodb://localhost:27017/covid-detect';

const database = async () => {
  try {
    await mongoose.connect(dbUri);
    return console.info(`Successfully connected to ${dbUri}`);
  } catch (error) {
    console.error('Error connecting to database: ', error);
    return process.exit(1);
  }
};

mongoose.connection.on('disconnected', database);

module.exports = database;
