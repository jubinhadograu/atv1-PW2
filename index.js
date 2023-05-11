const express = require('express');

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

const cursoController = require('./controller/cursoController');
app.use('/', cursoController);


app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM - http://localhost:3000');
});