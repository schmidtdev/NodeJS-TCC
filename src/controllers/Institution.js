const Inst = require('../models/Institution')

module.exports = {
  async store(req, res){
    const instInsert = req.body

    let inst = await Inst.findOne(instInsert)

    if(!inst){
      inst = await Inst.create(instInsert)
    }

    return res.json(inst)
  },

  async show(req, res) {

  },

  async index(req, res) {

  },

  async update(req, res) {

  },

  async destroy(req, res) {

  },

  async restore(req, res) {
      
  }
}