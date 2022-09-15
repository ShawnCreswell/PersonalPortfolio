const express = require('express')

const PirateController = require("../controllers/pirate.controller");

module.exports = (app) => {
  app.get("/api/pirate", PirateController.getAllPirate);
  app.post("/api/pirate", PirateController.createPirate);
  app.get("/api/pirate/:id", PirateController.getPirate);
  app.put("/api/pirate/:id", PirateController.updatePirate);
  app.delete("/api/pirate/:id", PirateController.deletePirate);
};

// module.exports = app => {
//   app.get("/api/pirate/", pirateController.findAllPirate);
//   app.get("/api/jokes/:id", JokeController.findOneSingleJoke);
//   app.post("/api/jokes/new", JokeController.createNewJoke);
//   app.put("/api/jokes/update/:id", JokeController.updateExistingJoke);
//   app.delete("/api/jokes/delete/:id", JokeController.deleteAnExistingJoke);
// };
