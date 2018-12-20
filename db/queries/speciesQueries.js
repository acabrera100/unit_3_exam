const { db } = require("./index.js");

const getAllSpecies = (req, res, next) => {
  db.any("SELECT * FROM species")
    .then(body => {
      res.status(200).json({
        status: "success",
        message: "Received All Species!",
        body: body
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getSingleSpecies = (req, res, next) => {
  let researcherId = parseInt(req.params.id);
  db.one("SELECT * FROM species WHERE id = $1", [researcherId])
    .then(body => {
      res.status(200).json({
        status: "success",
        message: "Received Just One  Species",
        body: body
      });
    })
    .catch(err => {
      return next(err);
    });
};

const addSpecies = (req, res, next) => {
  const researcher = req.body;
  db.none(
    "INSERT INTO species(name, is_mammal) VALUES (${name}, ${is_mammal})",
    researcher
  )
    .then(body => {
      res.status(200).json({
        status: "success",
        message: "Just added a Species to the database"
      });
    })
    .catch(err => {
      console.log(err);
      next();
    });
};

module.exports = {
  getAllSpecies,
  getSingleSpecies,
  addSpecies
};
