const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Acessando a administração');
});

router.get('/:id', (req, res) => {
  res.send('Acessando a administração como id: ' + req.params.id);
});

router.post('/', (req, res) => {
    const corpo = `Login: ${req.body.login}\nSenha: ${req.body.senha}`;
  res.send('Acessando a administração via POST \n' + corpo);
});

router.path('/:id', (req, res) => {
    res.send('Acessando a administração via PATH');
});

router.put('/:id', (req, res) => {
    res.send('Acessando a administração via PUT');
});

router.delete('/:id', (req, res) => {
    res.send('Acessando a administração via DELETE');
});

module.exports = router;