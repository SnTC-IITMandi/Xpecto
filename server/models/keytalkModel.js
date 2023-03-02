const mongoose = require("mongoose");

const keytalkSchema = mongoose.Schema({
  // write your schema here
  title: {
    type: String,
    required: [true, "Keytalk must have a title"],
  },
  speakers: [
    {
      name: {
        type: String,
        required: [true, "Speaker must have a name"],
      },
      photo: String,
      qualification: String,
      link: {
        type: String,
      },
    },
  ],
  dateTime: {
    type: String,
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    // required: [true, 'A tour must have a cover image'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Keytalk = mongoose.model("Keytalk", keytalkSchema);

module.exports = Keytalk;
