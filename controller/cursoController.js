const express = require('express');

const cursoModel = require('../model/cursoModel');

//gerenciador de rotas
const router = express.Router();

//rota de inserção de categoria(post)
router.post('/curso/inserir', (req,res)=>{

    let nome_curso = req.body.nome_curso;
    
    cursoModel.create(
        {nome_curso}
    ).then(
        ()=>{
           return res.status(201).json({
            errorStatus:false,
            mensageStatus:'CATEGORIA INSERIDA COM SUCESSO'
           });
        }   
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );
});

module.exports = router;