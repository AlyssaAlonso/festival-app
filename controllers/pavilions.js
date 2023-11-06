const Pavilion = require("../models/pavilion");
const Booth = require("../models/booth");
const Item = require("../models/item");

async function index(req, res) {
  //get all pavilions from DB
  const pavilions = await Pavilion.find({});
  res.render("pavilions/index.ejs", {
    title: "All Pavilions",
    pavilions,
  });
}

async function newPavilion(req, res) {
  const booths = await Booth.find({});
  res.render("pavilions/new.ejs", { title: "Add a Pavilion", booths });
}

async function create(req, res) {
  await Pavilion.create(req.body);
  res.redirect("/pavilions");
}

async function show(req, res) {
  const pavilionId = req.params.id;

  const pavilion = await Pavilion.findById(pavilionId)
    .populate("booths")
    .exec();

  const boothList = await Booth.find({ pavilion: pavilion._id }).exec();
  pavilion.booths = boothList;

  res.render("pavilions/show.ejs", {
    title: `${pavilion.name}`,
    pavilion,
  });
}

async function showMenus(req, res) {
  const pavilionId = req.params.id;

  const pavilion = await Pavilion.findById(pavilionId)
    .populate("booths")
    .exec();

  const boothList = await Booth.find({ pavilion: pavilion._id }).exec();
  pavilion.booths = boothList;

  const itemList = await Item.find({ pavilion: pavilion.name });
  pavilion.items = itemList;

  res.render("pavilions/showMenus.ejs", {
    title: `${pavilion.name}`,
    pavilion,
  });
}

module.exports = {
  index,
  new: newPavilion,
  create,
  show,
  showMenus,
};
