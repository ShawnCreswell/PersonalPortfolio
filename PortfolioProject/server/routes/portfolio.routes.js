const express = require('express')

const PortfolioController = require("../controllers/portfolio.controller");

module.exports = (app) => {
  app.get("/api/portfolio", PortfolioController.getAllPortfolio);
  app.post("/api/portfolio", PortfolioController.createPortfolio);
  app.get("/api/portfolio/:id", PortfolioController.getPortfolio);
  app.put("/api/portfolio/:id", PortfolioController.updatePortfolio);
  app.delete("/api/portfolio/:id", PortfolioController.deletePortfolio);
};
