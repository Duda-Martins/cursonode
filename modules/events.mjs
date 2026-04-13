import {EventEmitter} from 'events';

class Event extends EventEmitter {}
const meuEvento = new Event();


// subscriber - assinante
meuEvento.on('segurança', (x,y) => {
  console.log(`Executando o evento 'segurança': ${x} e ${y}`);
});

// publisher - emissor
meuEvento.emit('segurança', 'userAdimin', 'alterou Salário');

meuEvento.on("encerrar", (dados) => {
  console.log(`Assinante ${dados}`);
});

meuEvento.emit("encerrar", "Encerrando a execução da importação dos dados!");