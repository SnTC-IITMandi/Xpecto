const mongoose = require("mongoose");

const TimelineSchema = mongoose.Schema({
    eventname: {
        type: String,
        required: true,
    },
    eventtime: {
        type: String,
        required: true,
    },
    eventdate: {
        type: String,
        required: true,
    },
    venue: {
        type: String,
        required: true,
    },
});

const Timeline = mongoose.model("Timeline", TimelineSchema);

module.exports = Timeline;
