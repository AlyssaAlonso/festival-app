const Pavilion = require("../models/pavilion");
const Booth = require("../models/booth");
const Item = require("../models/item");

async function index(req, res) {
  const items = await Item.find({});
  res.render("items/index", { title: "All Menu Items", items });
}

async function show(req, res) {
  const item = await Item.findById(req.params.id);
  res.render("items/show", { title: `${item.name}`, item });
}

async function newItem(req, res) {
  try {
    const booths = await Booth.find({});
    const pavilions = await Pavilion.find({});
    res.render("items/new.ejs", {
      title: "Create a New Menu Item",
      booths,
      pavilions,
    });
  } catch (error) {
    res.status(500).send("An error occurred");
  }
}

async function create(req, res) {
  try {
    const { name, price, description, booth } = req.body;

    const selectedBooth = await Booth.findOne({ name: booth });

    if (!selectedBooth) {
      return res.status(400).send("Selected booth not found");
    }

    const pavilionId = selectedBooth.pavilion;

    const pavilion = await Pavilion.findById(pavilionId);

    const newItem = await Item.create({
      name,
      price,
      description,
      booth: booth,
      pavilion: pavilion.name,
    });

    res.redirect("/items");
  } catch (err) {
    console.log(err);
    res.render("items/new", { errorMsg: err.message });
  }
}

module.exports = {
  index,
  show,
  new: newItem,
  create,
};
