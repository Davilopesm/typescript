"use strict";
exports.__esModule = true;
var databaseConnection_1 = require("./databaseConnection");
var table = 'capsulas';
var RepositoryCapsulas = (function () {
    function RepositoryCapsulas() {
    }
    RepositoryCapsulas.prototype.writeInsert = function (name, instrucoesPreparo, tempoPreparo, id_tipo) {
        return databaseConnection_1.knex.insert({ name: name, instrucoes_preparo: instrucoesPreparo, tempo_preparo: tempoPreparo, id_tipo: id_tipo }).into(table);
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
    RepositoryCapsulas.prototype.find = function (id) {
        return databaseConnection_1.knex.select('name', 'instrucoes_preparo', 'tempo_preparo').from(table).where({ id: id });
    };
    RepositoryCapsulas.prototype.findOne = function (id) {
        return databaseConnection_1.knex.select().from(table).where({ id: id });
    };
    return RepositoryCapsulas;
}());
exports["default"] = RepositoryCapsulas;
//# sourceMappingURL=RepositoryCapsula.js.map