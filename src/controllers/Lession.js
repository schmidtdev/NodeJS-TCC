// IMPORTING MODEL
  const LessionModel = require('../models/Lession')

// DEFINING MODULE FUNCTIONS
  module.exports = {
    // POST FUNCTION
      async store(req, res) {
        const {filename} = req.file

        let lession = LessionModel.create({
          lession_name: req.body.lession_name,
          lession_component: req.body.lession_component,
          lession: filename
        })

        if(!lession){
          return res.status(400).json({error: "Erro ao publicar material"})
        }
  
        //return res.json(material)
        return res.json({message: 'Sucesso ao subir material'})
      },

      async index(req, res) {

      },

      async show(req, res) {

      },

      async update(req, res) {

      },

      async destroy(req, res) {

      },

      async restore(req, res) {
          
      }
  }