const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        // const Database = "mongodb://localhost:27017/xpecto"
         const Database ="mongodb+srv://xpecto:xpectoweb@cluster0.jnsftw4.mongodb.net/xpectoMainDB?retryWrites=true&w=majority";
        mongoose
            .connect(Database, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => console.log("DB connection successful!"));
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;
