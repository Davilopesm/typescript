export const knex = require ('knex')({
    client : 'pg',
    connection: {
        host: 'localhost',
        user: 'davi',
        password: '169759',
        database: 'todo_db'
    }
});

