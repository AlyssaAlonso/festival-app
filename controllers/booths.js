const Pavilion = require("../models/pavilion");
const Booth = require("../models/booth");
const Item = require("../models/item");

async function index(req, res, next) {
  const booths = await Booth.find({});
  res.render("booths/index.ejs", { title: "All Booths", booths: booths });
}

async function show(req, res) {
  const boothId = req.params.id;

  try {
    const booth = await Booth.findById(boothId).populate("items").exec();

    if (!booth) {
      return res.status(404).send("Booth not found");
    }

    const itemList = await Item.find({ booth: booth.name });
    booth.items = itemList;

    res.render("booths/show.ejs", {
      title: `${booth.name}`,
      booth,
    });
  } catch (error) {
    res.status(500).send("An error occurred");
  }
}

async function create(req, res) {
  await Booth.create(req.body);
  res.redirect("/booths");
}

async function newBooth(req, res) {
  const pavilions = await Pavilion.find({});
  res.render("booths/new.ejs", { title: "Create a New Booth", pavilions });
}

module.exports = {
  index,
  show,
  create,
  new: newBooth,
};
