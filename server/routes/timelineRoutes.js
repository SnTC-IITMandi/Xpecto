const express = require("express");
const router = express.Router();

const timelineController = require("./../controllers/timelineController");

router.route("/").get(timelineController.getAllTimelines).post(
  // authController.protect,
  // authController.restrictTo('admin'),
  timelineController.createTimeline
);

router.route("/:id").get(timelineController.getTimeline)
  .patch(
//     // authController.protect,
//     // authController.restrictTo('admin'),
    timelineController.updateTimeline
  )
  .delete(
//     // authController.protect,
//     // authController.restrictTo('admin'),
    timelineController.deleteTimeline
  );
  
module.exports = router;