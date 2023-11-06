const Item = require("../models/item");

async function deleteReview(req, res) {
  const item = await Item.findOne({
    "reviews._id": req.params.id,
    "reviews.user": req.user._id,
  });

  if (!item) return res.redirect("/items");

  item.reviews.remove(req.params.id);

  await item.save();

  res.redirect(`/items/${item._id}`);
}

async function create(req, res) {
  const item = await Item.findById(req.params.id);

  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;

  item.reviews.push(req.body);
  try {
    await item.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/items/${item._id}`);
}

module.exports = {
  create,
  delete: deleteReview,
};
