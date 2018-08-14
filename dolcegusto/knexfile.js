// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: 'davi',
      password: '169759',
      database: 'dolcegusto',
      filename: './dev.sqlite3'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      user: 'davi',
      password: '169759',
      database: 'dolcegusto'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      password: '169759',
      database: 'dolcegusto'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
