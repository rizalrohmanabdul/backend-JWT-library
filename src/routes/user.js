
const express = require('express')
const Route = express.Router()

const userController = require('../controllers/user')
const Auth = require('../helpers/auth')

Route
  // .all('/*', Auth.authInfo)
  .get('/', Auth.authInfo, Auth.accesstoken, userController.getUser)
  // .get('/', userController.getUser)
  .post(`/register`, userController.registrasiUser)
  .post(`/login`, userController.loginUser)
  .patch(`/:id_ktp`, userController.updateUser)
  .delete(`/:id_ktp`, userController.deleteUser)

module.exports = Route
