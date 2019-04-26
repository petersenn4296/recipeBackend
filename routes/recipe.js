const express = require('express');
const knex = require('../knex');
const router = express.Router();
const controller = require('../controller/recipe.js');

router.get('/all', controller.getAll);
router.get('/:id', controller.getOne)

module.exports = router

