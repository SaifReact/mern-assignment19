const express = require('express')
const app = express()
const helmet = require('helmet')
const hpp = require('hpp')
const cors  = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const apiRoutes = require('./src/routes/APIRoot.js')
const rateLimit = require('express-rate-limit')
const xss = require('xss-clean')



//Security modules
app.use(helmet())
app.use(hpp())
app.use(cors())
app.use(xss())


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, 
	limit: 300
})

app.use(limiter)

// Database connection
mongoose.connect('mongodb+srv://ostad:ostad@cluster0.oe7fb2j.mongodb.net/foodAssignment?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });


// API Route
app.use('/api/v1', apiRoutes)





module.exports = app;