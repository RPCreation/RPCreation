const Resume = require('../models/Resume');
const { generatePdfFromResume } = require('../services/pdfService');

const memoryResumes = [];

exports.saveResume = async (req, res) => {
  const payload = {
    userId: req.user?.id,
    name: req.body.name,
    data: req.body.resume,
    template: req.body.template,
    accent: req.body.accent,
    font: req.body.font
  };
  try {
    const latest = await Resume.findOne({ userId: req.user.id, name: payload.name }).sort({ version: -1 });
    payload.version = latest ? latest.version + 1 : 1;
    const created = await Resume.create(payload);
    return res.json(created);
  } catch {
    payload.id = String(Date.now());
    payload.version = (memoryResumes.filter((r) => r.name === payload.name).at(-1)?.version || 0) + 1;
    memoryResumes.push(payload);
    return res.json(payload);
  }
};

exports.listResumes = async (req, res) => {
  try {
    const docs = await Resume.find({ userId: req.user.id }).sort({ updatedAt: -1 });
    return res.json(docs);
  } catch {
    return res.json(memoryResumes.filter((r) => r.userId === req.user.id));
  }
};

exports.exportPdf = async (req, res) => {
  const url = await generatePdfFromResume(req.body);
  res.json({ url: `${req.protocol}://${req.get('host')}${url}` });
};
