const { db } = require("./index.js");

const getAllResearchers = (req, res, next) => {
  db.any("SELECT * FROM researchers")
    .then(body => {
      res.status(200).json({
        status: "success",
        message: "Received All Researchers!",
        body: body
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getSingleResearcher = (req, res, next) => {
  let researcherId = parseInt(req.params.id);
  db.one("SELECT * FROM researchers WHERE id = $1", [researcherId])
    .then(body => {
      res.status(200).json({
        status: "success",
        message: "Received Just One  Researcher",
        body: body
      });
    })
    .catch(err => {
      return next(err);
    });
};

const addResearcher = (req, res, next) => {
  const researcher = req.body;
  db.none(
    "INSERT INTO researchers(name, job_title) VALUES (${name}, ${job_title})",
    researcher
  )
    .then(body => {
      res.status(200).json({
        status: "success",
        message: "Received Just added a Employee",
        body: body
      });
    })
    .catch(err => {
      console.log(err);
      next();
    });
};

const updateResearcher = (req, res, next) => {
  db.none(
    "UPDATE researchers SET name=${name}, job_title=${job_title} WHERE id=${id}",
    {
      name: req.body.name,
      job_title: req.body.job_title,
      id: parseInt(req.params.id)
    }
  )
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "You Updated a Researcher in the Database!"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const deleteResearcher = (req, res, next) => {
  let researcherId = parseInt(req.params.id);
  db.result("DELETE FROM researchers WHERE id=$1", researcherId)
    .then(body => {
      res.status(200).json({
        status: "success",
        message:
          "The offboarding will commence at once. Employee is removed from the database"
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {
  getAllResearchers,
  getSingleResearcher,
  addResearcher,
  updateResearcher,
  deleteResearcher
};
