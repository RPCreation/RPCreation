const express = require('express');
const auth = require('../middleware/auth');
const { saveResume, listResumes, exportPdf } = require('../controllers/resumeController');

const router = express.Router();
router.post('/', auth, saveResume);
router.get('/', auth, listResumes);
router.post('/export', exportPdf);

module.exports = router;
