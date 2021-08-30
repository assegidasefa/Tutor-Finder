const express = require('express');
const requestController = require('../controllers/requestControllers');
const authController = require('../Controllers/authControllers');
const router = express.Router({ mergeParams: true });
const adminController = require('../Controllers/adminControllers');


router.route('/student').get(authController.protect,authController.restrictTo('student'),requestController.getStudentRequest)
router.route("/admin").get(adminController.protect,adminController.restrictTo('admin'),requestController.getAll);
router.route('/teacher').get(authController.protect,authController.restrictTo('teacher'),requestController.getReceivedRequest);
router.route('/accept/:id').patch(authController.protect,authController.restrictTo('teacher'),requestController.acceptRequest);
router.route('/approve/:id').patch(adminController.protect,adminController.restrictTo('admin'),requestController.approvedRequest);


//update the request of the request



router.route('/').
post(
  authController.protect,
  authController.restrictTo('student'),
  requestController.setTeacherStudentIds,
  requestController.createRequest);

router
  .route('/:id')
  .get(requestController.getRequest)
  .patch(requestController.updateRequest)
  .delete(authController.protect,authController.restrictTo('teacher'),requestController.deleteRequest);
module.exports = router;