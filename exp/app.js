const express = require('express');

const app = express();

const cookieParser = require('cookie-parser');

app.use('/static', express.static('public'));

app.use(express.json());
app.use(cookieParser());

const adminRouter = require('./routes/admin');
const usuarioRouter = require('./routes/usuario');

app.use((req, res, next) => {

  console.log(`Executando middleware no nível da aplicação`);

  return next();
});

app.get('/setcookie', (req, res) => {
  res.cookie('user', 'Maria Eduarda', {maxAge: 900000, httpOnly: true});
  return res.send('Cookie foi gravado com sucesso!');
});

app.get('/getcookie', (req, res) => {
  let user = req.cookies['user'];
  if (user) {
    return res.send(user);
  }
});

function logRequest(req, res, next) {

  console.log(`Executando middleware para a rota usuarios`);

  return next();
}

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/admin', adminRouter);
app.use('/usuario', usuarioRouter);

app.get('*', (req, res) => {
  setImmediate(() => {
    next(new Error('Temos um problema'));
  }
);

app.use((err, req, res, next) => {

  console.log("Geramos um erro, veja as instruções para corrigir!");
  res.status(500).json({message: err.message});

  return next();
});

app.listen(3000, () => {
  console.log(`Server running: http://localhost:3000`);
})});