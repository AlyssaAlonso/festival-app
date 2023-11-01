const Pavilion = require("../models/pavilion");
const Booth = require("../models/booth");
const Item = require("../models/item");

async function show(req, res) {
  const item = await Item.findById(req.params.id);
  res.render("items/show.ejs", { title: "Item Details", item });
}

function newItem(req, res) {
  // We'll want to be able to render an
  // errorMsg if the create action fails
  res.render("booths/show.ejs", { title: "Add Movie", errorMsg: "" });
}

async function create(req, res) {
  try {
    //get the booth based off the boothId
    const booth = await booth.findById(req.params.boothId);
    //push the item object (req.body) into the item array
    if (!booth.items) booth.items = [];
    booth.items.push(req.body);
    //save the booth document
    await booth.save();
    //redirect back to the booth show page
    res.redirect(`/booths/${req.params.boothId}`);
  } catch (err) {
    console.log(err);
    res.redirect(`/booths/${req.params.boothId}`);
  }
}

module.exports = {
  show,
  newItem,
  create,
};
