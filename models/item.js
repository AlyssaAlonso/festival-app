const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    booth: [{ type: Schema.Types.ObjectId, ref: "Booth" }],
    pavilion: [{ type: Schema.Types.ObjectId, ref: "Pavilion", require: true }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Item", itemSchema);
