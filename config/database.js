const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE_URL)
    .then((db) => console.log(`Connected to database --> ${db.connection.host} / ${db.connection.name} / ${db.connection.port}`))

// mongoose.connect(process.env.DATABASE_URL);

// const db = mognoose.connection;

// db.on('connected', function(){
//     console.log("connected")
// })