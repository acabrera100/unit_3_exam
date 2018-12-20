const { db } = require("./index.js");
let err = 'error'

const getAllSightings = (req, res, next) => {
  db.any("SELECT * FROM Sightings")
    .then(body => {
      res.status(200).json({
        status: "success",
        message: "Received All Sightings!",
        body: body
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getSightingsSpeciesId = (req, res, next) => {
  let sightingsSpeciesId = parseInt(req.params.id);
  db.any(
    "SELECT researcher_id,habitat_id FROM sightings JOIN species ON species.id = sightings.species_id  WHERE species.id = $1",
    [sightingsSpeciesId]
  )
    .then(data => {
      res.status(200).json({
        status: "Success",
        message: "All sightings for a specific SPECIES",
        body: data
      });
    })
    .catch(err => next(err));
};

const getSightingsResearcherId = (req, res, next) => {
  let sightingsResearcherId = parseInt(req.params.id);
  db.any(
    "SELECT species_id,habitat_id FROM sightings JOIN researchers ON researchers.id = sightings.researcher_id  WHERE researchers.id = $1",
    [sightingsResearcherId]
  )
    .then(data => {
      res.status(200).json({
        status: "Success",
        message: "All sightings for a specific RESEARCHER",
        body: data
      });
    })
    .catch(err => next(err));
};

const getSightingsHabitatId = (req, res, next) => {
  let sightingsHabitatId = parseInt(req.params.id);
  db.any(
    "SELECT species_id,researcher_id FROM sightings JOIN habitats ON habitats.id = sightings.habitat_id  WHERE habitats.id = $1",
    [sightingsHabitatId]
  )
    .then(data => {
      res.status(200).json({
        status: "Success",
        message: "All sightings for a specific HABITAT",
        body: data
      });
    })
    .catch(err => {
      return next(err);
    });
};

const addSightings = (req, res, next) => {
  const sightings = req.body;
  db.none(
    "INSERT INTO sightings(species_id, researcher_id,habitat_id) VALUES (${species_id}, ${researcher_id},${habitat_id})",
    sightings
  )
    .then(body => {
      res.status(200).json({
        status: "success",
        message:
          "Look did you see that? Well me too, jot it down into the database"
      });
    })
    .catch(err => {
      console.log(err);
      next();
    });
};

const deleteSighting = (req, res, next) => {
  let sightingId = parseInt(req.params.id);
  db.result("DELETE FROM sightings WHERE id=$1", sightingId)
    .then(body => {
      res.status(200).json({
        status: "success",
        message:
          "You be seeing things that ain't really there. It is now DELETED from Database"
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {
  getAllSightings,
  getSightingsSpeciesId,
  getSightingsResearcherId,
  getSightingsHabitatId,
  addSightings,
  deleteSighting
};
