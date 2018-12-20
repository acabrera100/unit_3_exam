const express = require('express');
const router = express.Router();
const { getAllAnimals,getSingleAnimal,addAnimal,updateAnimal,deleteAnimal } = require('../db/queries/animalQueries.js');

router.get('/', getAllAnimals);
router.get('/:id', getSingleAnimal);
router.post('/', addAnimal)
router.patch('/:id', updateAnimal)
router.delete('/:id', deleteAnimal)

module.exports = router;
