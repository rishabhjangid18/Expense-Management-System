const express = require('express');
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const { connect } = require('mongoose');
const connectDb = require('./config/connectDb');

// path build
const path = require('path')
//config dot env file
dotenv.config();

//database call
connectDb();
//reset objects
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// static files

app.use(express.static(path.join(__dirname, './client/build')));

//routes user
app.use('/api/v1/users',require('./routes/userRoutes'));

// routes transection
app.use('/api/v1/transections',require('./routes/transectionRoutes'));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
});

// port

const PORT = 8080 || process.env.PORT;

// listen server 

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});