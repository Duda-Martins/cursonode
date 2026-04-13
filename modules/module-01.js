// console.log("Executando module-01.js");

const oculta = () => {
    console.log("Executada função oculta");
}

const executa = () => {
    console.log("Executada função executa");
}

const welcome = "Bem vindo ao modulo module-01.js";

module.exports = {
    executa,
    welcome,
    oculta
}