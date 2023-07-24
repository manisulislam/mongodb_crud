const { Schema, model } = require("mongoose");

const topicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Topic = model.Topic || model("Topic", topicSchema);

module.exports = Topic;
