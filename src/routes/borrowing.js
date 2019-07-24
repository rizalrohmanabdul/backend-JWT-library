const express = require('express')
const Route = express.Router()

const borrowingController = require('../controllers/borrowing')
const Auth = require('../helpers/auth')
 
Route 
  .get('/', Auth.authInfo, Auth.accesstoken, borrowingController.getBorrowing)
  .get('/details/:id', Auth.authInfo, Auth.accesstoken, borrowingController.detailBorrowing)
  .get('/byiduser/:id', Auth.authInfo, Auth.accesstoken, borrowingController.getBorrowingByidUser)
  .post(`/`, Auth.authInfo, Auth.accesstoken, borrowingController.insertBorrowing)
  .patch(`/:id_borrowing`, Auth.authInfo, Auth.accesstoken, borrowingController.updateBorrowing)
  .patch(`/retruned/:id_borrowing`, Auth.authInfo, Auth.accesstoken, borrowingController.retrunedBorrowing)
  .delete(`/:id_borrowing`, Auth.authInfo, Auth.accesstoken, borrowingController.deleteBorrowing)

module.exports = Route
