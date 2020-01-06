const express = require('express');
const morgan = require('morgan');
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

const port = 3333;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(require('./routes'));

app.listen(port);

