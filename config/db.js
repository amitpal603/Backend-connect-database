const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const connectDB = async() => {
    try {
        const connect = mongoose.connect(process.env.MONGODB_URI,)
        console.log('Database connected...');
        
    } catch (error) {
        console.log('faild connection',error.message);
        process.exit(1)
    }
}

module.exports = connectDB