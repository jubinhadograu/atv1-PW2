//importação do sequelize
const sequelize = require('sequelize');

/*conexao com banco de dados
1 - NOME DO BANCO
2 - USUÁRIO
3 - SENHA
4 - OBJETO JSON QUE DETERMINA AS COFIGURAÇÕES DA CONEXÃO:
    4.1 - HOST DO BANCO
    4.2 - PORTA LÓGICA
    4.3 - DIALETO SQL
    4.4 - TIMEZONE -3
*/
const connection = new sequelize(
    'bd_atv_nsa',
    'root',
    '',
    {
        host:'localhost',
        port:'3307',
        dialect:'mysql',
        timezone:'-03:00'
    }
);

module.exports = connection;