
const express = require('express'),
router = express.Router(),
{_findAll} = require('../controllers/empresas')
auth = require('../middleware/auth')

router.get('/', auth, async(req,res)=> {
    try{
        const empresas = await _findAll();
        return res.status(200).json(empresas)
    }catch (e){
        return res.status(500).json(e.message);
}});


module.exports = router;