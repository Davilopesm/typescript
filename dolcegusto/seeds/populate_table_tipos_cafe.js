exports.seed = async function(knex, Promise) {
  //await knex('tipos_cafe').del();
  return knex('tipos_cafe').insert([
    {name: 'Espresso'},
    {name: 'Cafe da Manha' },
    {name: 'Cappucino & Latte' },
    {name: 'Chocolate' },
    {name: 'Refrescante' },
    {name: 'Exclusividades' },  
  ]);
};
