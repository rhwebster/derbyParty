const express = require('express');
const horses = require('./horseData');

const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const morgan = require('morgan');
const helmet = require('helmet');
const { ValidationError } = require('sequelize');
const path = require('path');

const routes = require('./routes');
const { environment } = require('./config');
const isProduction = environment === 'production';

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

if (!isProduction) {
    app.use(cors());
}

app.use(helmet({
    contentSecurityPolicy: false
}))

app.use(routes);

app.use(express.static(path.join(__dirname, 'public')));

app.use((_req, _res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.title = "Resource Not Found";
    err.errors = ["The requested resource couldn't be found."];
    err.status = 404;
    next(err);
});

const port = 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = app;