const express = require('express');
const horses = require('./horseData');

const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const morgan = require('morgan');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan('dev'));

const port = 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`));