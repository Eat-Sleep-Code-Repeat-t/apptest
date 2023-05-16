const User = require('../models/User')
const Role = require('../models/Role')

class authController {
  async registration(req, res) {
    try {

    } catch (e) {
      console.log(e)
      res.status(400).json({ massage: 'Registratin error' })
    }

  }

  async login(req, res) {
    try {

    } catch (e) {
      console.log(e)
      res.status(400).json({ massage: 'Login error' })
    }


  }

  async getUsers(req, res) {
    try {
      //костыль .  треб  создать  отдельный эндпоинт
      // const userRole = new Role()
      // const adminRole = new Role({value: "ADMIN"})
      // await userRole.save()
      // await adminRole.save()
      res.json("server work")
    } catch (e) {

    }

  }
}

module.exports = new authController()