const express = require('express');
const { suggest } = require('../controllers/aiController');

const router = express.Router();
router.post('/suggest', suggest);

module.exports = router;
