const LoginModel = require('../models/Login')
const passport = require('passport')

module.exports = {

    async login(req, res, next) {

        const retorno = {
            status: 0,
            usertype: ''
        }
        
        passport.authenticate('local', (err, user, info) => {

            if (err) {
                return next(err)
            }
    
            if(!user) {
    
                return res.json(retorno)
    
            }
    
            req.logIn(user, (err) => {
    
                //console.log(user);
    
                if (err) {
                    console.log(err)
                    return next('err')
                }
    
                console.log('sessao: ', req.session.passport.user.dataValues);
    
                if(user.usertype == 'A') {
    
                    retorno.status = 1
                    retorno.usertype = 'A'
    
                }
    
                else if (user.usertype == 'S') {
    
                    retorno.status = 1
                    retorno.usertype = 'S'
    
                }
    
                else if (user.usertype == 'T') {
    
                    retorno.status = 1
                    retorno.usertype = 'T'
    
                }
    
            })

            return res.json(retorno)
    
        })
        
        (req, res, next)

    },

    async passwdRecovery(req, res) {



    },

    async logout(req, res) {

        //matar sessao
        //redirecionar para pag de login

    }

}