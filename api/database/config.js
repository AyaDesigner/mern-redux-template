require('dotenv').config();
const mongoose = require('mongoose');


const dbUrl = process.env.DB_URL;


//connection to mongodb


const connectDB = async () => {
    try {
        //database Name
        const databaseName='demomern';
        const con = await mongoose.connect(dbUrl, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
        console.log(`Database connected : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1);
    }
}

module.exports = connectDB;