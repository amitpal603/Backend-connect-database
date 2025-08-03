const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const productRouter = require('./router/productRouter')


dotenv.config()
connectDB()

const app = express()

app.use(express.json())
app.use('/api',productRouter)

app.get('/',(req,res) => {
    res.send('Home page router')
})

const port = process.env.PORT || 4000
app.listen(port,() => {
    console.log(`listen server on port no : ${port}`);
    
})