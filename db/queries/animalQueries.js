const { db } = require("./index.js");

const getAllAnimals = (req, res, next) => {
  db.any("SELECT * FROM animals")
    .then(body => {
      res.status(200).json({
        status: "success",
        message: "Received All Animals!",
        body: body
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getSingleAnimal = (req, res, next) => {
  let researcherId = parseInt(req.params.id);
  db.one("SELECT * FROM animals WHERE id = $1", [researcherId])
    .then(body => {
      res.status(200).json({
        status: "success",
        message: "Received Just One  Animal",
        body: body
      });
    })
    .catch(err => {
      return next(err);
    });
};

const addAnimal = (req, res, next) => {
  const researcher = req.body;
  db.none(
    "INSERT INTO animals(species_id, nickname) VALUES (${species_id}, ${nickname})",
    researcher
  )
    .then(body => {
      res.status(200).json({
        status: "success",
        message: "Another Animal nabbed into the pokedex",
        body: body
      });
    })
    .catch(err => {
      console.log(err);
      next();
    });
};

const updateAnimal = (req, res, next) => {
  db.none(
    "UPDATE animals SET species_id=${species_id}, nickname=${nickname} WHERE id=${id}",
    {
      species_id: parseInt(req.body.species_id),
      nickname: req.body.nickname,
      id: parseInt(req.params.id)
    }
  )
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "You Updated a Animal in the Database!"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const deleteAnimal = (req, res, next) => {
  let researcherId = parseInt(req.params.id);
  db.result("DELETE FROM animals WHERE id=$1", researcherId)
    .then(body => {
      res.status(200).json({
        status: "success",
        message:
          "pokedex is full, emptied up some space by removing Animal from Database"
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {
  getAllAnimals,
  getSingleAnimal,
  addAnimal,
  updateAnimal,
  deleteAnimal
};
