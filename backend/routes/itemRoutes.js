const express = require('express');
const itemController = require('../controllers/intemController');

const router = express.Router();

router.get('/', itemController.getItems);
router.get('/:examcode/:section', itemController.getSaa);
router.post('/addquestion', itemController.createItem);

module.exports = router;
