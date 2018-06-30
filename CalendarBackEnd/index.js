const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');

db.sync({force: false}).then(() => console.log('DB synced!'));

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./api'));

// app.use('*', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '..', 'public/index.html'))
// });

app.use(express.static(path.join(__dirname, '../public')))

app.use(((err, req, res, next) => {
  res.status(err.status);
}))

const port = 8080;
app.listen(port, () => console.log(`Calendify server listening on port ${port}.`));
