import express = require('express');
import bodyParser = require('body-parser');
import tipos from '../routes/tipos/tipos';
import capsulas from '../routes/capsulas/capsulas';
import capsula from '../routes/capsulas/capsula';
const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/types', tipos);
app.use('/capsules', capsulas);
app.use('/capsule', capsula);
 

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});




