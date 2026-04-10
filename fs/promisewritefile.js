const { writeFile } = require('fs');

function criarArquivo(name, content) {
    return new Promise((resolve, reject) => {
        writeFile(name, content, (err) => {
            if (err) reject(err);
            resolve();
        });
    });
}

criarArquivo('promiseArquivo.txt', 'Criando um arquivo utilizando promise')
    .then(() => console.log('Arquivo promiseArquivo.txt criado com sucesso!'))
    .catch((err) => console.log(err));