const express = require('express')
const Route = express.Router()

const bookController = require('../controllers/book')
const Auth = require('../helpers/auth')
 
Route 
  .get('/', bookController.getBook)
  .get('/active/', Auth.authInfo, Auth.accesstoken, bookController.getBookactive)
  .post(`/`, Auth.authInfo, Auth.accesstoken, bookController.insertBook)
  .patch(`/:id_book`, Auth.authInfo, Auth.accesstoken, bookController.updateBook)
  .delete(`/:id_book`, Auth.authInfo, Auth.accesstoken, bookController.deleteBook)

module.exports = Route
