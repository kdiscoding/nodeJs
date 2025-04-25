const mongoose = require('mongoose');
require('dotenv').config();
// the mognodb connection url
// QAdhJxt2rxee9tPf password for altas db
// const monogURL = DB_LOCAL_URL;
const monogURL = process.env.DB_URL;


// set up mongoDB connection
mongoose.connect(monogURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// get the default connecton
// Mongoose maintains a default connection object representing the mongoDB connection
const db = mongoose.connection;

db.on('connected', () => {
  console.log("connected to mongoDB server");
});
db.on('error', (err) => { console.log("connection error ", err) });
db.on("disconnected", () => console.log("MongoDB is disconnected"));

// export the database connection
module.exports = db;