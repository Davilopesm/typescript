"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
exports.router = router;
var databaseConnection_1 = require("../../database/databaseConnection");
router.get('/', function (req, res) {
    databaseConnection_1.knex.select().from('todo').then(function (data) {
        res.send(data);
    });
});
router.get('/:id', function (req, res) {
    databaseConnection_1.knex.select().from('todo').where({ id: req.params.id })
        .then(function (data) {
        res.send(data);
    });
});
router.post('/', function (req, res) {
    databaseConnection_1.knex.insert(req.body).returning('*').into('todo')
        .then(function (data) {
        res.send(data);
    });
});
router.patch('/:id', function (req, res) {
    databaseConnection_1.knex('todo').where({ id: req.params.id }).update(req.body).returning('*')
        .then(function (data) {
        res.send(data);
    });
});
router.put('/:id', function (req, res) {
    databaseConnection_1.knex('todo').where({ id: req.params.id }).update({
        title: req.body.title || null,
        is_done: req.body.is_done || null
    }).returning('*')
        .then(function (data) {
        res.send(data);
    });
});
router["delete"]('/:id', function (req, res) {
    databaseConnection_1.knex('todo').where({ id: req.params.id }).del()
        .then(function (data) {
        res.send("Sucesso!!");
    });
});
//# sourceMappingURL=todo.js.map