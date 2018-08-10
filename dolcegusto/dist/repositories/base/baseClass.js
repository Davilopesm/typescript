"use strict";
exports.__esModule = true;
var databaseConnection_1 = require("../base/databaseConnection");
var RepositoryTiposCafe = (function () {
    function RepositoryTiposCafe() {
    }
    RepositoryTiposCafe.prototype.find = function () {
        return databaseConnection_1.knex.select().from('tipos_cafe');
    };
    RepositoryTiposCafe.prototype.findOne = function (id) {
        return databaseConnection_1.knex.select().from('tipos_cafe').where({ "if": id });
    };
    return RepositoryTiposCafe;
}());
exports["default"] = RepositoryTiposCafe;
//# sourceMappingURL=baseClass.js.map