"use strict";
exports.__esModule = true;
var databaseConnection_1 = require("./databaseConnection");
var table = 'capsulas';
var RepositoryCapsulas = (function () {
    function RepositoryCapsulas() {
    }
    RepositoryCapsulas.prototype.writeInsert = function (name, instrucoesPreparo, tempoPreparo) {
        return databaseConnection_1.knex.insert({ name: name, instrucoes_preparo: instrucoesPreparo, tempo_preparo: tempoPreparo }).into(table);
    };
    RepositoryCapsulas.prototype.writeDelete = function (id) {
        return databaseConnection_1.knex(table).where({ id: id }).del();
    };
    RepositoryCapsulas.prototype.writeUpdate = function (id, name, instrucoesPreparo, tempoPreparo) {
        return databaseConnection_1.knex(table).where({ id: id }).update({
            name: name || null,
            instrucoes_preparo: instrucoesPreparo || null,
            tempo_preparo: tempoPreparo || null
        });
    };
    RepositoryCapsulas.prototype.find = function (idTipo) {
        return databaseConnection_1.knex.select('id', 'name').from(table).where({ id_tipo: idTipo });
    };
    RepositoryCapsulas.prototype.findOne = function (id) {
        return databaseConnection_1.knex.select().from(table).where({ name: name });
    };
    return RepositoryCapsulas;
}());
exports["default"] = RepositoryCapsulas;
//# sourceMappingURL=RepositoryCapsulas.js.map