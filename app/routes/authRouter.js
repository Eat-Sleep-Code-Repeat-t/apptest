const Router = require('express')
//прослушивание запросов
const router = Router()
const controller = require('../controller/authController.js')
const {check} = require("express-validator");
const authMiddleware = require('../middlewares/authMiddleware')

//все  запросы что  делаем
router.post('/registration', [
  check('username', "Имя пользователя не может быть пустым").notEmpty(),
  check('password', "Пароль должен быть длинее 4 и  меньше 10 символов").isLength({min:4, max:10})
], controller.registration)

router.post('/login', controller.login)
router.get('/users',authMiddleware, controller.getUsers)


module.exports = router  