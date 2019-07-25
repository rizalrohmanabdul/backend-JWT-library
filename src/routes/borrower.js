
const express = require('express')
const Route = express.Router()

const borrowerController = require('../controllers/borrower')
 
Route 
  .get('/', borrowerController.getUser)
  .post(`/`, borrowerController.insertUser)
  .patch(`/:id_ktp`, borrowerController.updateUser)
  .delete(`/:id_ktp`, borrowerController.deleteUser)

module.exports = Route
