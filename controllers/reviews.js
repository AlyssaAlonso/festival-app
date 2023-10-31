const Item = require("../models/item");

module.exports = {
  create,
};

async function create(req, res) {
  const item = await Item.findById(req.params.id);
  // We can push (or unshift) subdocs into Mongoose arrays
  item.reviews.push(req.body);
  try {
    // Save any changes made to the item doc
    await item.save();
  } catch (err) {
    console.log(err);
  }
  // Step 5:  Respond to the Request (redirect if data has been changed)
  res.redirect(`/items/${item._id}`);
}
