const { response } = require("express");
const { model } = require("mongoose");
const Portfolio = require("../models/portfolio.model");

module.exports.getAllPortfolio = (req, res) => {
  Portfolio.find({})
    .then((allDaPortfolio) => res.json({ portfolios: allDaPortfolio }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getPortfolio = (request, response) => {
  Portfolio.findOne({ _id: request.params.id })
    .then((portfolio) => response.json(portfolio))
    .catch((err) => response.json(err));
};

module.exports.createPortfolio = (req, res) => {
  const { name, imgUrl, crewPosition, treasure, portfolioPhrase, pegLeg, eyePatch, hookHand } = req.body;
  Portfolio.create({
    name,
    imgUrl,
    crewPosition,
    treasure,
    portfolioPhrase,
    pegLeg,
    eyePatch,
    hookHand,
  })
    .then((portfolio) => res.json(portfolio))
    .catch((err) => res.status(400).json(err));
};

module.exports.updatePortfolio = (request, response) => {
  Portfolio.findByIdAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedPortfolio) => {
      console.log(updatedPortfolio)
      response.json(updatedPortfolio);
    })
    .catch((err) => response.status(400).json(err));
};

module.exports.deletePortfolio = (request, response) => {
  Portfolio.deleteOne({ _id: request.params.id }).then((deleteConfirmation) =>
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
