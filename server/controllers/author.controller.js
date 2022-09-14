const { response } = require("express");
const { model } = require("mongoose");
const Author = require("../models/author.model");

module.exports.getAllAuthor = (req, res) => {
  Author.find({})
    .then((allDaAuthor) => res.json({ author: allDaAuthor }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getAuthor = (request, response) => {
  Author.findOne({ _id: request.params.id })
    .then((author) => response.json(author))
    .catch((err) => response.json(err));
};

module.exports.createAuthor = (req, res) => {
  const { name } = req.body;
  Author.create({
    name,
  })
    .then((author) => res.json(author))
    .catch((err) => res.status(400).json(err));
};

module.exports.updateAuthor = (request, response) => {
  Author.findByIdAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedAuthor) => {
      response.json(updatedAuthor);
    })
    .catch((err) => response.status(400).json(err));
};

module.exports.deleteAuthor = (request, response) => {
  Author.deleteOne({ _id: request.params.id }).then((deleteConfirmation) =>
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
