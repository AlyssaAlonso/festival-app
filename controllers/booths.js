const Booth = require("../models/booth");

async function index(req, res, next) {
  const booths = await Booth.find({});
  res.render("booths/index.ejs", { title: "All Booths", booths: booths });
}

async function show(req, res) {
  const booth = await Booth.findById(req.params.id);
  res.render("booths/booth.ejs", { title: `${booth.name}`, booth: booth });
}

async function create(req, res) {
  // create booth
  console.log(req.body);

  await Booth.create(req.body);
  res.redirect("/booths");
}

function newBooth(req, res) {
  res.render("booths/new.ejs");
}

module.exports = {
  index,
  show,
  create,
  new: newBooth,
};
