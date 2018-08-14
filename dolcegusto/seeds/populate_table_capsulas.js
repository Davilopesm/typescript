exports.seed = async function(knex, Promise) {
  await knex('capsulas2').del();
  return knex('capsulas2').insert([
    {name: 'Caffè Matinal', instrucoes_preparo: 'Acione a alavanca para a posição de fluxo quente', tempo_preparo: '21 segundos', id_tipo: 2 },
    {name: 'Duo Matinal', instrucoes_preparo: 'Acione a alavanca para a posição de fluxo quente', tempo_preparo: '28 (Cafe Au Lait) e  21 segundos (Caffè Matinal)', id_tipo: 2 },
    {name: 'Lungo', instrucoes_preparo: 'Acione a alavanca para a posição de fluxo quente', tempo_preparo: '21 segundos', id_tipo: 2 },
    {name: 'Cappuccino', instrucoes_preparo: 'Acione a alavanca para a posição de fluxo quente', tempo_preparo: 'Capsula preta: 28 segundos e Capsula branca: 08 segundos', id_tipo: 3 },
    {name: 'Caramel Latte Macchiato', instrucoes_preparo: 'Acione a alavanca para a posição de fluxo quente', tempo_preparo: 'Capsula preta: 10 segundos e Capsula branca: 24 segundos', id_tipo: 3 },
    {name: 'Cortado', instrucoes_preparo: 'Acione a alavanca para a posição de fluxo quente', tempo_preparo: '15 segundos', id_tipo: 3 },
    {name: 'Latte Macchiato', instrucoes_preparo: 'Acione a alavanca para a posição de fluxo quente', tempo_preparo: 'Capsula preta: 10 segundos e Capsula branca: 24 segundos', id_tipo: 3 },
    {name: 'Vanilla Latte Macchiato', instrucoes_preparo: 'Acione a alavanca para a posição de fluxo quente', tempo_preparo: 'Capsula preta: 28 segundos e Capsula branca: 24 segundos', id_tipo: 3 },
    {name: 'Chococino', instrucoes_preparo: 'Acione a alavanca para a posição de fluxo quente', tempo_preparo: 'Capsula marrom: 15 segundos e Capsula branca: 15 segundos', id_tipo: 4 },
    {name: 'Chococino Caramel', instrucoes_preparo: 'Acione a alavanca para a posição de fluxo quente', tempo_preparo: 'Capsula marrom: 15 segundos e Capsula branca: 15 segundos', id_tipo: 4 },
    {name: 'Mocha', instrucoes_preparo: 'Acione a alavanca para a posição de fluxo quente', tempo_preparo: 'Capsula marrom: 15 segundos e Capsula branca: 15 segundos', id_tipo: 4 },
    {name: 'Nescao', instrucoes_preparo: 'Acione a alavanca para a posição de fluxo quente', tempo_preparo: '21 segundos', id_tipo: 4 },
    {name: 'Ristreto', instrucoes_preparo: 'Acione a alavanca para a posição de fluxo quente', tempo_preparo: '08 segundos', id_tipo: 1 },
    {name: 'Espresso Intenso', instrucoes_preparo: 'Acione a alavanca para a posição de fluxo quente', tempo_preparo: '10 segundos', id_tipo: 1 },
    {name: 'Espresso Decafeinato', instrucoes_preparo: 'Acione a alavanca para a posição de fluxo quente', tempo_preparo: '10 segundos', id_tipo: 1 },
    {name: 'Ristreto Ardenza', instrucoes_preparo: 'Acione a alavanca para a posição de fluxo quente', tempo_preparo: '08 segundos', id_tipo: 1 },
    {name: 'Espresso Barista', instrucoes_preparo: 'Acione a alavanca para a posição de fluxo quente', tempo_preparo: '08 segundos', id_tipo: 1 },
    {name: 'Nestea Limao', instrucoes_preparo: 'Acione a alavanca para a posição de fluxo frio', tempo_preparo: '30 segundos', id_tipo: 5 },
    {name: 'Nestea Pessego', instrucoes_preparo: 'Acione a alavanca para a posição de fluxo frio', tempo_preparo: '30 segundos', id_tipo: 5 },
    {name: 'Chati Tea Latte', instrucoes_preparo: 'Acione a alavanca para a posição de fluxo frio', tempo_preparo: 'Capsula marrom: 15 segundos e Capsula branca: 15 segundos', id_tipo: 6 },
    {name: 'Marrakesh Style Tea', instrucoes_preparo: 'Acione a alavanca para a posição de fluxo frio', tempo_preparo: '28 segundos', id_tipo: 6 },
    {name: 'Espresso', instrucoes_preparo: 'Acione a alavanca para a posição de fluxo quente', tempo_preparo: '08 segundos', id_tipo: 1 },
    {name: 'Cafe Au Lait', instrucoes_preparo: 'Acione a alavanca para a posição de fluxo quente', tempo_preparo: '28 segundos', id_tipo: 2 }    
  ]);
};
