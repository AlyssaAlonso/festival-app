const booth = require("../models/booth");

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
  create,
};
