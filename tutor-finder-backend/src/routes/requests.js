const express = require('express');
const requestController = require('../controllers/requestControllers');
const authController = require('../Controllers/authControllers');

const router = express.Router();


router.route('/sent').get(requestController.getSentRequest)
router.route("/received").get(authController.protect,authController.restrictTo('teacher'),requestController.getReceivedRequest)
router.route("/admin").get(requestController.getAllRequests);
router.route('/updaterequest/:id').patch(authController.protect,authController.restrictTo('teacher'),requestController.updateRequest)
router.route('/createRequest').post(requestController.createRequest);

router
  .route('/:id')
  .get(requestController.getRequest)
  .patch(requestController.updateRequest)
  .delete(authController.protect,authController.restrictTo('teacher'),requestController.deleteRequest);
module.exports = router;