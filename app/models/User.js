const {Schema,model} = require('mongoose')


//Описание как пользователь  храниться в БД
const User = new Schema ({
  username: {type: String, unique: true, require: true},
  password: {type: String, require: true},
  roles: [{type: String, ref:'Role'}]
})


module.exports = model('User', User)