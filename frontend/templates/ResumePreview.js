import clsx from 'clsx';

const sectionTitle = (title, accent) => <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: accent }}>{title}</h3>;

function listItems(items) {
  return (items || []).filter(Boolean).map((item, i) => <li key={i}>{item}</li>);
}

export default function ResumePreview({ resume, template, accent, font, onInlineEdit }) {
  const shell = clsx('bg-white text-zinc-900 p-8 min-h-[1120px] w-full text-sm', {
    'border-l-8': ['creative', 'corporate'].includes(template),
    'grid grid-cols-[1fr_2fr] gap-6': template === 'twocolumn',
    'max-w-[800px]': template !== 'compact',
    'max-w-[700px] text-xs': template === 'compact'
  });

  const header = (
    <header className={clsx('mb-4 border-b pb-3')} style={{ borderColor: accent }}>
      <h1 contentEditable suppressContentEditableWarning onBlur={(e) => onInlineEdit('personal.fullName', e.currentTarget.textContent)} className="text-2xl font-bold">{resume.personal.fullName || 'Your Name'}</h1>
      <p className="font-semibold" style={{ color: accent }}>{resume.personal.role || 'Target Role'}</p>
      <p>{resume.personal.email} • {resume.personal.phone} • {resume.personal.location}</p>
      <p className="text-xs">{resume.personal.linkedin} {resume.personal.portfolio} {resume.personal.github}</p>
    </header>
  );

  const body = (
    <>
      {resume.sectionOrder.includes('summary') && <section className="mb-3">{sectionTitle('Profile Summary', accent)}<p contentEditable suppressContentEditableWarning onBlur={(e) => onInlineEdit('personal.summary', e.currentTarget.textContent)}>{resume.personal.summary}</p></section>}
      {resume.sectionOrder.includes('experience') && <section className="mb-3">{sectionTitle('Experience', accent)}{resume.experience.map((exp, i) => <div key={i}><p className="font-semibold">{exp.title} • {exp.company}</p><p className="text-xs">{exp.duration}</p><ul className="list-disc pl-5">{listItems(exp.responsibilities)}</ul></div>)}</section>}
      {resume.sectionOrder.includes('education') && <section className="mb-3">{sectionTitle('Education', accent)}{resume.education.map((e, i) => <p key={i}><span className="font-semibold">{e.degree}</span> - {e.institution} ({e.year}) {e.score}</p>)}</section>}
      {resume.sectionOrder.includes('skills') && <section className="mb-3">{sectionTitle('Skills', accent)}<p><span className="font-semibold">Technical:</span> {resume.skills.technical}</p><p><span className="font-semibold">Soft:</span> {resume.skills.soft}</p></section>}
      {resume.sectionOrder.includes('projects') && <section className="mb-3">{sectionTitle('Projects', accent)}{resume.projects.map((p, i) => <div key={i}><p className="font-semibold">{p.title}</p><p>{p.description}</p><p className="text-xs">{p.techStack} • {p.link}</p></div>)}</section>}
      {resume.sectionOrder.includes('certifications') && <section className="mb-3">{sectionTitle('Certifications', accent)}<ul className="list-disc pl-5">{listItems(resume.certifications)}</ul></section>}
      {resume.sectionOrder.includes('languages') && <section className="mb-3">{sectionTitle('Languages', accent)}<ul className="list-disc pl-5">{listItems(resume.languages)}</ul></section>}
      {resume.sectionOrder.includes('achievements') && <section className="mb-3">{sectionTitle('Achievements', accent)}<ul className="list-disc pl-5">{listItems(resume.achievements)}</ul></section>}
    </>
  );

  if (template === 'twocolumn') {
    return <div className={shell} style={{ borderColor: accent, fontFamily: font }}><div>{header}<section>{sectionTitle('Skills', accent)}<p>{resume.skills.technical}</p></section></div><div>{body}</div></div>;
  }

  return <div className={shell} style={{ borderColor: accent, fontFamily: font }}>{header}{body}</div>;
}
