const mongoose = require("mongoose")

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/bluegrass-billies",
)

module.exports = mongoose.connection;