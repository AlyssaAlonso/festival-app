const booth = require("../models/booth");

async function create(req, res) {
  try {
    //get the booth based off the teamId
    const booth = await booth.findById(req.params.teamId);
    //push the player object (req.body) into the player array
    if (!booth.players) booth.players = [];
    booth.players.push(req.body);
    //save the booth document
    await booth.save();
    //redirect back to the booth show page
    res.redirect(`/teams/${req.params.teamId}`);
  } catch (err) {
    console.log(err);
    res.redirect(`/teams/${req.params.teamId}`);
  }
}

module.exports = {
  create,
};
