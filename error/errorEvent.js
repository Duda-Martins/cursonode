const { EventEmitter } = require('events');
const emiter = new EventEmitter();

const validaObjeto = (a) => {
    if (typeof a !== 'object') {
        emiter.emit('error', new Error('Tipo informado inválido'));
    } else {
        console.log('Objeto Válido!');
    }
}

emiter.addListener('error', (err) => {
    console.log('Ocorreu um erro: ' + err.message);
});

let dados = { name: "Hcode", course: "NodeJS" };

validaObjeto(dados);