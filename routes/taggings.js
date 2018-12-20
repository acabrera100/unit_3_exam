const express = require('express');
const router = express.Router();
const { getAllTaggings,getSingleTaggings,getTaggingsResearchersId,getTaggingsAnimalsId,addTaggings } = require('../db/queries/taggingsQueries.js');

router.get('/', getAllTaggings);
router.get('/:id', getSingleTaggings);
router.get('/researchers/:id',getTaggingsResearchersId)
router.get('/animals/:id',getTaggingsAnimalsId)
router.post('/', addTaggings)

module.exports = router;
