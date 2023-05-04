const { create }= require('../services/empresas/create');
const {findByRut, findAll }= require('../services/empresas/find')

async function _1create(empresa){
    return await create(empresa);
}

async function _findByRut(rut){
    return await findByRut(rut);
}

async function _findAll() {
    return await findAll()
}

module.exports = {
    _1create,_findAll,_findByRut
}