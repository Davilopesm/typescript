exports.up = async function(knex, Promise) {
  return knex.schema.createTable("capsulas2", (table) => {
      table.increments();
      table.string('name');
      table.string('instrucoes_preparo');
      table.string('tempo_preparo');
      table.integer('id_tipo').unsigned().index().references('id').inTable('tipos_cafe');
  });
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists("capsulas2")
  ]);
};
