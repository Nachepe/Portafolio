const { create }= require('../services/empresas/create');
//const {findByUsername, findAll }= require('../services/users/find');

async function _1create(empresa){
    return await create(empresa);
}

/*async function _findByUsername(username){
    return await findByUsername(username);
}

async function _findAll() {
    return await findAll()
}
*/
module.exports = {
    _1create
}