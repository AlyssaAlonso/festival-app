const Pavilion = require("../models/pavilion");
const booth = require("../models/booth");

async function index(req, res) {
  //get all pavilions from DB
  const pavilions = await Pavilion.find({});
  res.render("pavilions/index.ejs", {
    pavilions,
  });
}

async function newPavilion(req, res) {
  const booths = await booth.find({});
  res.render("pavilions/new.ejs", { booths });
}

async function create(req, res) {
  /*
        {
            name: "somename",
            booths: [f34rf34f3wsdf34, 342543fsd234sf3]
        }
    */

  await Pavilion.create(req.body);
  res.redirect("/pavilions");
}

async function show(req, res) {
  const pavilion = await Pavilion.findById(req.params.id)
    .populate("booths")
    .exec();
  res.render("pavilions/show.ejs", { pavilion });
}

module.exports = {
  index,
  new: newPavilion,
  create,
  show,
};
