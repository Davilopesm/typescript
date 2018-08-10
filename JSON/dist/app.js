"use strict";
exports.__esModule = true;
var express = require("express");
var todo_1 = require("./routes/api/todo");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/api', todo_1.router);
app.listen(3000);
//# sourceMappingURL=app.js.map