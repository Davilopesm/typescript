"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var tipos_1 = require("../routes/tipos/tipos");
var capsulas_1 = require("../routes/capsulas/capsulas");
var capsula_1 = require("../routes/capsulas/capsula");
var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/types', tipos_1["default"]);
app.use('/capsules', capsulas_1["default"]);
app.use('/capsule', capsula_1["default"]);
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
//# sourceMappingURL=index.js.map