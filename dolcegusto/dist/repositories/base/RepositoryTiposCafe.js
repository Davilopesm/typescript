"use strict";
exports.__esModule = true;
var databaseConnection_1 = require("./databaseConnection");
var table = 'tipos_cafe';
var RepositoryTiposCafe = (function () {
    function RepositoryTiposCafe() {
    }
    RepositoryTiposCafe.prototype.writeInsert = function (name) {
        try {
            return databaseConnection_1.knex.insert({ name: name }).into(table);
        }
        catch (Error) {
            throw (Error);
        }
    };
    RepositoryTiposCafe.prototype.writeDelete = function (id) {
        return databaseConnection_1.knex(table).where({ id: id }).del();
    };
    RepositoryTiposCafe.prototype.writeUpdate = function (id, name) {
        return databaseConnection_1.knex(table).where({ id: id }).update({
            name: name
        });
    };
    RepositoryTiposCafe.prototype.find = function () {
        return databaseConnection_1.knex.select().from(table);
    };
    RepositoryTiposCafe.prototype.findOne = function (id) {
        return databaseConnection_1.knex.select().from(table).where({ id: id });
    };
    return RepositoryTiposCafe;
}());
exports["default"] = RepositoryTiposCafe;
//# sourceMappingURL=RepositoryTiposCafe.js.map