const { response } = require("express");
const { model } = require("mongoose");
const Pirate = require("../models/pirate.model");

module.exports.getAllPirate = (req, res) => {
  Pirate.find({})
    .then((allDaPirate) => res.json({ pirates: allDaPirate }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getPirate = (request, response) => {
  Pirate.findOne({ _id: request.params.id })
    .then((pirate) => response.json(pirate))
    .catch((err) => response.json(err));
};

module.exports.createPirate = (req, res) => {
  const { name, imgUrl, crewPosition, treasure, piratePhrase, pegLeg, eyePatch, hookHand } = req.body;
  Pirate.create({
    name,
    imgUrl,
    crewPosition,
    treasure,
    piratePhrase,
    pegLeg,
    eyePatch,
    hookHand,
  })
    .then((pirate) => res.json(pirate))
    .catch((err) => res.status(400).json(err));
};

module.exports.updatePirate = (request, response) => {
  Pirate.findByIdAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedPirate) => {
      console.log(updatedPirate)
      response.json(updatedPirate);
    })
    .catch((err) => response.status(400).json(err));
};

module.exports.deletePirate = (request, response) => {
  Pirate.deleteOne({ _id: request.params.id }).then((deleteConfirmation) =>
    response.json(deleteConfirmation)
  );
};

// module.exports.findAllJokes = (req, res) => {
//   Joke.find()
//     .then(allDaJokes => res.json({ jokes: allDaJokes}))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.findOneSingleJoke = (req, res) => {
// 	Joke.findOne({ _id: req.params.id })
// 		.then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
// 		.catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.createNewJoke = (req, res) => {
//   Joke.create(req.body)
//     .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.updateExistingJoke = (req, res) => {
//   Joke.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
//     .then(updatedJoke => {
//       console.log(updatedJoke)
//       res.json({ joke: updatedJoke })
//     })
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.deleteAnExistingJoke = (req, res) => {
//   Joke.deleteOne({ _id: req.params.id })
//     .then(result => res.json({ result: result }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };
