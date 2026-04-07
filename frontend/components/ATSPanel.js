export default function ATSPanel({ atsScore, role }) {
  const strength = atsScore >= 80 ? 'Strong' : atsScore >= 60 ? 'Moderate' : 'Needs Improvement';
  const suggestions = [
    `Use role-specific keywords like "${role || 'Product Manager'}" in summary and experience.`,
    'Quantify achievements with metrics.',
    'Keep resume to concise, scannable bullet points.'
  ];

  return (
    <div className="card p-4 space-y-2">
      <h3 className="font-semibold">ATS Optimization</h3>
      <div className="h-2 rounded bg-zinc-800"><div className="h-full rounded" style={{ width: `${atsScore}%`, background: '#ff7a00' }} /></div>
      <p className="text-sm">ATS Score: <span className="font-semibold">{atsScore}/100</span> • {strength}</p>
      <ul className="list-disc pl-5 text-xs text-zinc-300">
        {suggestions.map((s) => <li key={s}>{s}</li>)}
      </ul>
    </div>
  );
}
