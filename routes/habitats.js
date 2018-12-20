const express = require('express');
const router = express.Router();
const { getAllHabitats,getSingleHabitat,addHabitat } = require('../db/queries/habitatsQueries.js');

router.get('/', getAllHabitats);
router.get('/:id', getSingleHabitat);
router.post('/', addHabitat)

module.exports = router;
