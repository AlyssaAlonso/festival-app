const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pavilionSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    booths: [{ type: Schema.Types.ObjectId, ref: "Booth", require: true }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pavilion", pavilionSchema);
