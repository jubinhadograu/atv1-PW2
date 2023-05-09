//import do sequelize
const sequelize = require('sequelize');

//import da conexao com banco de dados
const connection = require('../database/database');

/*definição da estrutura da tabela de curso*/
const curso = connection.define(
    'tbl_curso',
    {
        nome_curso:{
            type: sequelize.STRING,
            allowNull:false
        }
    }
);

//curso.sync({force:true});

module.exports = curso;