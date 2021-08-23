const express = require('express');
const requestController = require('../controllers/requestControllers');
const authController = require('../Controllers/authControllers');

const router = express.Router();

// router.param('id', tourController.checkID);
router.route("/sent").get(requestController.getSentRequest)
router.route("/received").get(authController.protect,authController.restrictTo('teacher'),requestController.getReceivedRequest)
router.get("/", authController.protect,authController.restrictTo('admin'),requestController.getRequests);
router.route('/updaterequest/:id').patch(authController.protect,authController.restrictTo('teacher'),requestController.updateRequest)

router
  .route('/:id')
  .get(requestController.getRequest)
  .patch(requestController.updateRequest)
  .delete(authController.protect,authController.restrictTo('student','admin'),requestController.deleteRequest);
module.exports = router;