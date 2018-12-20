const { db } = require("./index.js");

const getAllTaggings = (req, res, next) => {
  db.any("SELECT * FROM Taggings")
    .then(body => {
      res.status(200).json({
        status: "success",
        message: "Received All Taggings!",
        body: body
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getSingleTaggings = (req, res, next) => {
  let taggingsId = parseInt(req.params.id);
  db.one("SELECT * FROM Taggings WHERE id = $1", [taggingsId])
    .then(body => {
      res.status(200).json({
        status: "success",
        message: "Received Just One  Taggings",
        body: body
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getTaggingsResearchersId = (req, res, next) => {
  let tagResearcherId = parseInt(req.params.id);
  db.any(
    "SELECT researcher_id,animal_id FROM taggings JOIN researchers ON researchers.id = taggings.researcher_id  WHERE taggings.id = $1",
    [tagResearcherId]
  )
    .then(data => {
      res.status(200).json({
        status: "Success",
        message: "All taggings for a specific RESEARCHER",
        body: data
      });
    })
    .catch(err => next(err));
};

const getTaggingsAnimalsId = (req, res, next) => {
  let tagAnimalsId = parseInt(req.params.id);
  db.any(
    "SELECT animal_id FROM taggings JOIN animals ON animals.id = taggings.animal_id WHERE taggings.id = $1",
    [tagAnimalsId]
  )
    .then(data => {
      res.status(200).json({
        status: "Success",
        message: "All taggings for a specific ANIMAL",
        body: data
      });
    })
    .catch(err => next(err));
};

const addTaggings = (req, res, next) => {
  const taggings = req.body;
  db.none(
    "INSERT INTO taggings(animal_id, researcher_id) VALUES (${animal_id}, ${researcher_id})",
    taggings
  )
    .then(body => {
      res.status(200).json({
        status: "success",
        message: "Just added a some tags(you're it) to the database"
      });
    })
    .catch(err => {
      console.log(err);
      next();
    });
};

module.exports = {
  getAllTaggings,
  getSingleTaggings,
  getTaggingsResearchersId,
  getTaggingsAnimalsId,
  addTaggings
};
