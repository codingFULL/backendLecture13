const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoute = require('./routes/userRoute');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(bodyParser.json());

app.use(userRoute);

var server = app.listen(process.env.PORT || 8080, () => {
  console.log(
    `El servicio ha iniciado en el puerto ${process.env.PORT || 8080}`
  );
});
