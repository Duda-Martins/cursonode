const EventEmitter = require('events');

class Event extends EventEmitter {}
const meuEvento = new Event();

meuEvento.on('segurança', (x,y) => {
  console.log(`Executando o evento 'segurança': ${x} e ${y}`);
});

meuEvento.emit('segurança', 'userAdimin', 'alterou Salário');