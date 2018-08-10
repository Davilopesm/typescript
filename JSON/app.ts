import express = require('express');
import apiRoute from './routes/api/todo';
import bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/api', apiRoute);


app.listen(3000);
