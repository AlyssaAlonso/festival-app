const Booth = require("../models/booth");
const Item = require("../models/item");

async function index(req, res, next) {
  const booths = await Booth.find({});
  res.render("booths/index.ejs", { title: "All Booths", booths: booths });
}

async function show(req, res) {
  const boothId = req.params.id;

  const booth = await Booth.findById(boothId).populate("items").exec();

  // Fetches the items associated with the booth
  const itemList = await Item.find({ booth: booth._id }).exec();

  res.render("booths/show.ejs", {
    title: `${booth.name} Booth`,
    booth,
    itemList,
  });
}

async function create(req, res) {
  // create booth
  console.log(req.body);

  await Booth.create(req.body);
  res.redirect("/booths");
}

function newBooth(req, res) {
  res.render("booths/new.ejs", { title: "Create a New Booth" });
}

module.exports = {
  index,
  show,
  create,
  new: newBooth,
};
