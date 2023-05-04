const db = require('../../models');

async function findByRut(rut){
    if(!rut) throw new Error('sin rut de empresa de user...');
    return await db.empresa.findOne({

        where:{
            rut
        }
    });
}

async function findAll(){
    return await db.empresa.findAll({
        attributes: ['id','rut','nom_empresa','telefono','correo','direccion']
    })
}
module.exports ={
    findByRut, findAll
}