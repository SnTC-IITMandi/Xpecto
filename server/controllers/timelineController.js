const Timeline = require("./../models/timelineModel");
const asyncHandler = require("express-async-handler");

exports.getAllTimelines = asyncHandler(async (req, res, next) => {
  const Timelines = await Timeline.find();
  res.status(200).json({
    status: "success",
    data: Timelines,
  });
});

exports.createTimeline = asyncHandler(async (req, res, next) => {
  const newTimeline = await Timeline.create(req.body);

  res.status(200).json({
    status: "success",
    data: newTimeline,

  });

});

exports.getTimeline = asyncHandler(async (req, res, next) => {
  const timeline = await Timeline.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: timeline,
  });
});

exports.updateTimeline = asyncHandler(async (req, res, next) => {
  const doc = await Timeline.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!doc) {
    res.status(400).json({
      status: "Failed! The Timeline does not exist.",
    });
  }

  res.status(200).json({
    status: "success",
    data: doc,
  });
});

exports.deleteTimeline = asyncHandler(async (req, res, next) => {
  const doc = await Timeline.findByIdAndDelete(req.params.id);

  if (!doc) {
    res.status(400).json({
      status: "Failed! The Timeline does not exist.",
    });
  }

  res.status(200).json({
    status: "success",
    data: null,
  });
});
