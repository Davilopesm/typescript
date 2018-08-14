exports.up = async function(knex, Promise) {
  return knex.schema.createTable("tipos_cafe2", (table) => {
      table.increments().primary();
      table.string('name');
   });
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists("tipos_cafe2")
  ]);
};
