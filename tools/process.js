require("./rubdirectory/sub");
console.log("--------------------");
console.log(`Nome do arquivo: `, __filename);
console.log(`Diretório do arquivo: `,__dirname);
console.log(`Diretório em que foi invocado: `,process.cwd());
console.log(`Usuário no SO: `,process.env.USERNAME);
console.log(`Idioma: `,process.env.LANG);
console.log(`Nome do server: `,process.env.COMPUTERNAME);

switch (process.argv[2]) {
    case "-a":
        console.log("Execute rotina principal");
        break;
    case "-i":
        console.log("Execute instalação");
        break;
    case "-q":
        console.log("Encerrando aplicação");
        process.exit(); // interrompe imediatamente
        break;
    default:
        console.log("Parâmetro inválido");
}

console.log(`Ambiente do Servidor: `,process.platform);