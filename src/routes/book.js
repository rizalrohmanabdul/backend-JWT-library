const express = require('express')
const Route = express.Router()

const bookController = require('../controllers/book')
 
Route 
  .get('/', bookController.getBook)
  .get('/active/', bookController.getBookactive)
  .get('/detail/:id_book', bookController.detailBook)
  .post(`/`, bookController.insertBook)
  .patch(`/:id_book`, bookController.updateBook)
  .delete(`/:id_book`, bookController.deleteBook)

module.exports = Route
