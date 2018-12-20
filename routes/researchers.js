const express = require('express');
const router = express.Router();
const { getAllResearchers,getSingleResearcher,addResearcher,updateResearcher,deleteResearcher } = require('../db/queries/researchersQueries.js');

router.get('/', getAllResearchers);
router.get('/:id', getSingleResearcher);
router.post('/', addResearcher)
router.patch('/:id', updateResearcher)
router.delete('/:id', deleteResearcher)

module.exports = router;
