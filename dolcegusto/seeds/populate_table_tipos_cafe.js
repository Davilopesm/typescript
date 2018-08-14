exports.seed = async function(knex, Promise) {
  await knex('tipos_cafe2').del();
  return knex('tipos_cafe2').insert([
    {name: 'Espresso'},
    {name: 'Cafe da Manha' },
    {name: 'Cappucino & Latte' },
    {name: 'Chocolate' },
    {name: 'Refrescante' },
    {name: 'Exclusividades' },  
  ]);
};
