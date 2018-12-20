const express = require('express');
const router = express.Router();
const { getAllSightings,getSightingsSpeciesId,getSightingsResearcherId,getSightingsHabitatId,addSightings,deleteSighting } = require('../db/queries/sightingsQueries.js');

router.get('/', getAllSightings);
router.get('/species/:id', getSightingsSpeciesId );
router.get('/researchers/:id',getSightingsResearcherId);
router.get('/habitats/:id',getSightingsHabitatId);
router.post('/', addSightings);
router.delete('/:id',deleteSighting);

module.exports = router;
