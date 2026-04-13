// const modulo01 = require('./module-01');
// modulo01.executa();

const { executa, oculta } = require('./module-01');

require('./module-01');

// executano o módulo importado

executa();

oculta();