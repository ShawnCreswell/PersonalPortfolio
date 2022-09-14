const express = require('express')

const ProductController = require("../controllers/author.controller");

module.exports = (app) => {
  app.get("/api/author", ProductController.getAllAuthor);
  app.post("/api/author", ProductController.createAuthor);
  app.get("/api/author/:id", ProductController.getAuthor);
  app.put("/api/author/:id", ProductController.updateAuthor);
  app.delete("/api/author/:id", ProductController.deleteAuthor);
};

// module.exports = app => {
//   app.get("/api/product/", ProductController.findAllProduct);
//   app.get("/api/jokes/:id", JokeController.findOneSingleJoke);
//   app.post("/api/jokes/new", JokeController.createNewJoke);
//   app.put("/api/jokes/update/:id", JokeController.updateExistingJoke);
//   app.delete("/api/jokes/delete/:id", JokeController.deleteAnExistingJoke);
// };
