const express = require("express");
const app = express();
const bp = require("body-parser");
const researchers = require("./routes/researchers");
const species = require("./routes/species");
const animals = require("./routes/animals");
const habitats = require("./routes/habitats");
const taggings = require("./routes/taggings");
const sightings = require("./routes/sightings");



app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use("/researchers", researchers);
app.use("/species", species);
app.use("/animals", animals);
app.use("/habitats", habitats);
app.use("/taggings", taggings);
app.use("/sightings", sightings);


app.get("/", (req, res) => {
  res.send("This is the HOMEPAGE!");
});

app.get("*", (req, res) => {
  res.json({
    status: "Error",
    message: "You have input the route incorrectly, double check and try again"
  });
});



app.listen(4000, () => {
  console.log("App is listening on port 4000");
});
