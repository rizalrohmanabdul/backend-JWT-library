
const express = require('express')
const Route = express.Router()

const categoryController = require('../controllers/category')
const Auth = require('../helpers/auth')
 
Route 
  .get('/', Auth.authInfo, Auth.accesstoken, categoryController.getCategory)
  .post(`/`, Auth.authInfo, Auth.accesstoken, categoryController.insertCategory)
  .patch(`/:id_category`, Auth.authInfo, Auth.accesstoken, categoryController.updateCategory)
  .delete(`/:id_category`, Auth.authInfo, Auth.accesstoken, categoryController.deleteCategory)

module.exports = Route
