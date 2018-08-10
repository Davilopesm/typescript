"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
exports.router = router;
var todo_1 = require("./todo");
router.use('/todo', todo_1.router);
//# sourceMappingURL=index.js.map