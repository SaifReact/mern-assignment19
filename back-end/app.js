const express = require('express')
const app = express()
const helmet = require('helmet')
const hpp = require('hpp')
const cors  = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const apiRoutes = require('./src/routes/APIRoot.js')

//Security modules
app.use(helmet())
app.use(hpp())
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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