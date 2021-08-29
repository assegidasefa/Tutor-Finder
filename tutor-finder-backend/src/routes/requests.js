const express = require('express');
const requestController = require('../controllers/requestControllers');
const authController = require('../Controllers/authControllers');
const router = express.Router({ mergeParams: true });


router.route('/student').get(authController.protect,authController.restrictTo('student'),requestController.getStudentRequest)
router.route("/admin").get(requestController.getAll);
router.route('/updaterequest/:id').patch(authController.protect,authController.restrictTo('teacher'),requestController.updateRequest)
router.route('/').get(authController.protect,authController.restrictTo('teacher'),requestController.getAllRequests);


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