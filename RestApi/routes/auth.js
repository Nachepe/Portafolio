const express = require('express'),
router = express.Router(),
{_create, _findByUsername} = require('../controllers/users'),

{_1create} = require('../controllers/empresas'),
passport = require('passport');
jwt = require('jsonwebtoken')


router.post('/signin', async(req, res, next) => {
    passport.authenticate('local', {session: false} , function(err,user,info) {
        if (err) return res.status(500).json(err);
        if (!user) return res.status(400).json(info);
        const token = jwt.sign(user, process.env.SECRET_KEY, {expiresIn: '1h'})
        return res.status(200).json({
            token, expiresIn : 3600,
             user
        });
    })(req,res,next);

});


router.post('/signupemp', async(req, res) => {
    try {

       /* const foundUser = await _findByUsername(req.body.username);
        if (foundUser) {
            return res.status(400).json('eL USUARIO YA EXISTE')
        } */
        const empresa = await _1create(req.body);
        return res.status(201).json({
            status : 'SUCCESS',
            message: `el usuario ${empresa.nomempresa} fue creado satisfactoriamente`      
        })
    } catch (e) {
        return res.status(500).json(e.message);
    }
});




router.post('/signup', async(req, res) => {
    try {

        const foundUser = await _findByUsername(req.body.username);
        if (foundUser) {
            return res.status(400).json('eL USUARIO YA EXISTE')
        }
        const user = await _create(req.body);
        return res.status(201).json({
            status : 'SUCCESS',
            message: `el usuario ${user.username} fue creado satisfactoriamente`      
        })
    } catch (e) {
        return res.status(500).json(e.message);
    }
});

module.exports = router;