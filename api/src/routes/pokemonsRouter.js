const express = require("express");

const pokemonsRouter = express.Router();

// Aca van mis rutas de /pokemons

pokemonsRouter.get("/", async (req, res) => {
  try {
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = pokemonsRouter;
