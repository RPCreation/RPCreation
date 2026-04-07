function suggestSummary(role, summary) {
  const roleText = role || 'professional';
  return `Results-driven ${roleText} with proven ability to lead cross-functional collaboration, deliver measurable outcomes, and optimize workflows. ${summary || ''}`.trim();
}

function improveBullets(bullets = []) {
  return bullets.map((b) => b ? b.replace(/^/, '• ').replace(/responsible for/gi, 'delivered') : b);
}

function recommendSkills(role) {
  const base = ['Communication', 'Problem Solving', 'Teamwork'];
  const map = {
    developer: ['JavaScript', 'React', 'Node.js', 'REST APIs', 'Testing'],
    designer: ['Figma', 'UX Research', 'Wireframing', 'Design Systems'],
    manager: ['Roadmapping', 'Stakeholder Management', 'Agile', 'Metrics']
  };
  const key = Object.keys(map).find((k) => (role || '').toLowerCase().includes(k));
  return [...(map[key] || ['SQL', 'Excel', 'Data Analysis']), ...base];
}

module.exports = { suggestSummary, improveBullets, recommendSkills };
