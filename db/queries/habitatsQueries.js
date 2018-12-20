const { db } = require("./index.js");

const getAllHabitats = (req, res, next) => {
  db.any("SELECT * FROM habitats")
    .then(body => {
      res.status(200).json({
        status: "success",
        message:
          "Received All Habitats (almost like INTO THE SPIDERVERSE #NO SPOILERS)!",
        body: body
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getSingleHabitat = (req, res, next) => {
  let habitatId = parseInt(req.params.id);
  db.one("SELECT * FROM habitats WHERE id = $1", [habitatId])
    .then(body => {
      res.status(200).json({
        status: "success",
        message: "ONE HABITAT HAS BEEN FETCHED",
        body: body
      });
    })
    .catch(err => {
      return next(err);
    });
};

const addHabitat = (req, res, next) => {
  const researcher = req.body;
  db.none("INSERT INTO habitats(category) VALUES (${category})", researcher)
    .then(body => {
      res.status(200).json({
        status: "success",
        message: "Another Habitat nabbed into the WORLD OF YESTERYEAR",
        body: body
      });
    })
    .catch(err => {
      console.log(err);
      next();
    });
};

module.exports = {
  getAllHabitats,
  getSingleHabitat,
  addHabitat
};
