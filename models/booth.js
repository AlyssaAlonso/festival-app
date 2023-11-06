const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const boothSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    pavilion: [
      {
        type: Schema.Types.ObjectId,
        ref: "Pavilion",
      },
    ],
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: "Item",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booth", boothSchema);
