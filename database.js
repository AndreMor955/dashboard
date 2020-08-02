const mongoose = require("mongoose");
module.exports = mongoose.connect(process.env.MDB_PATH, { useNewUrlParser: true, useUnifiedTopology: true, user: process.env.MDB_USER, pass: process.env.MDB_PASS, dbName: process.env.MDB_DBNAME });