const { suggestSummary, improveBullets, recommendSkills } = require('../services/aiService');

exports.suggest = async (req, res) => {
  const { role, summary, bullets } = req.body;
  res.json({
    summary: suggestSummary(role, summary),
    improvedBullets: improveBullets(bullets || []),
    skills: recommendSkills(role),
    grammarNotes: ['Use action verbs.', 'Keep tense consistent.', 'Limit summary to 3-4 lines.'],
    atsKeywords: [role, 'impact', 'ownership', 'optimization', 'delivery'].filter(Boolean)
  });
};
