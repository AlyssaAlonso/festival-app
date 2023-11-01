const Pavilion = require("../models/pavilion");
const Booth = require("../models/booth");

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
  res.render("pavilions/new.ejs", { title: "Create a New Pavilion", booths });
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
  const pavilionId = req.params.id;

  const pavilion = await Pavilion.findById(pavilionId)
    .populate("booths")
    .exec();

  // Fetches the booths associated with the pavilion
  const boothList = await Booth.find({ pavilion: pavilion._id }).exec();

  res.render("pavilions/show.ejs", {
    title: `${pavilion.name}`,
    pavilion,
    boothList,
  });
}

module.exports = {
  index,
  new: newPavilion,
  create,
  show,
};
