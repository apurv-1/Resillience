const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      default: "no photo"
    }
  },
  { timestamps: true }
);

mongoose.model("Blog", blogSchema);
