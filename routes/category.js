const express = require('express');
const knex = require('../knex');
const router = express.Router();
const controller = require('../controller/category.js');

router.get('/all', controller.getAll);
router.post('/create', controller.createCategory)

module.exports = router