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

/* ROTA DE SELEÇÃO DE AUTOR(GET)*/
router.get('/curso/selecionar', (req,res)=>{
    
    cursoModel.findAll()
    .then(
        (cursos)=>{
            //console.log(cursos);
            res.json(cursos);
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

/* ROTA DE ALTERAÇÃO DE AUTOR(PUT)*/
router.put('/curso/alterar', (req,res)=>{

    let id = req.body.id;
    let nome_curso = req.body.nome_curso;

    cursoModel.update(
        {nome_curso},
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:'CATEGORIA ALTERADA COM SUCESSO'
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

/* ROTA DE EXCLUSÃO DE AUTOR(DELETE)*/
router.delete('/curso/excluir/:id', (req,res)=>{
    
    let id = req.params.id;
    console.log('ID: ' + id);

    cursoModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(200).json({
                errorStatus:false,
                mensageStatus:'CATEGORIA EXCLUIDA COM SUCESSO'
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