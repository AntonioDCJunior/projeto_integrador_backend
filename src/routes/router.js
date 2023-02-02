const { Router } = require('express')
const routs = Router()
const userCrtl = require('../controllers/controllUser')
const atividadeCrtl = require('../controllers/atividadeUser')


routs.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
     });

routs.get('/usuarios', userCrtl.getAllUser);
routs.post('/usuarios', userCrtl.createUser);
routs.put('/usuarios/:id', userCrtl.updateUser);
// routs.get('/usuarios/:id', userCrtl.getUniqueUser);
// routs.delete('/usuarios', userCrtl.deleteUser);

routs.get('/usuarios/atividades/:id', atividadeCrtl.getAllUsuarios);
routs.get('/usuarios/profissao/:atividade', atividadeCrtl.getAllUsuariosByAtividade);




module.exports = routs