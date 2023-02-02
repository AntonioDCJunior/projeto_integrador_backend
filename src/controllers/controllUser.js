const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



const getAllUser = async (req, res) => {
  const usuarios = await prisma.usuarios.findMany({})
  res.send(usuarios)
}


const createUser = async (req, res) => {
  try {
    const dataNascimento = new Date(req.body.dataNascimento)
    let data = {...req.body, dataNascimento}
    const usuarios = await prisma.usuarios.create({data})
    res.send(usuarios)
  } catch (err) {
    console.log(err)
  }
}



const updateUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const resultado = await prisma.usuarios.update({ where: {id}, data});
    res.send(resultado)
  } catch (err) {
    console.log(err)
  }
}






module.exports = {
  getAllUser,
  createUser,
  updateUser,
  
}