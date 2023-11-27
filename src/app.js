const express = require('express');
const mongoose = require('mongoose');
const applyMiddleware = require('./middlewares/applyMiddleware');
const connectDB = require('./db/connectDB');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const mealRoutes = require('./routes/meal')

applyMiddleware(app)

app.use(mealRoutes)

app.get('/health', (req, res) => {
    res.send('hehhe boiiii')
})

app.all("*", (req, res, next) => {
    const error = new Error(`the requested url is invalid: ${req.url}`)
    error.status = 404
    next(error)
})
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})


const main = async () => {
    await connectDB()
    app.listen(port, () => {
        console.log(`server running ggwp ${port}`)
    })
}
main()