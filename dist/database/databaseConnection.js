"use strict";
exports.__esModule = true;
exports.knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'davi',
        password: '169759',
        database: 'todo_db'
    }
});
//# sourceMappingURL=databaseConnection.js.map