import { useMemo, useState } from 'react';
import { defaultResume } from '@/utils/constants';

export const useResumeState = () => {
  const [resume, setResume] = useState(defaultResume);
  const [template, setTemplate] = useState('professional');
  const [accent, setAccent] = useState('#ff7a00');
  const [font, setFont] = useState('Inter');

  const atsScore = useMemo(() => {
    let score = 0;
    const keywords = ['lead', 'built', 'delivered', 'optimized', 'collaborated'];
    const text = JSON.stringify(resume).toLowerCase();
    keywords.forEach((k) => {
      if (text.includes(k)) score += 10;
    });
    if (resume.personal.summary.length > 60) score += 20;
    if ((resume.skills.technical || '').split(',').length >= 5) score += 20;
    if (resume.experience.length >= 2) score += 10;
    return Math.min(100, score);
  }, [resume]);

  return {
    resume,
    setResume,
    template,
    setTemplate,
    accent,
    setAccent,
    font,
    setFont,
    atsScore
  };
};
