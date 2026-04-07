import Head from 'next/head';
import { useState } from 'react';
import ResumeForm from '@/components/ResumeForm';
import TemplateSelector from '@/components/TemplateSelector';
import ATSPanel from '@/components/ATSPanel';
import SectionOrder from '@/components/SectionOrder';
import ResumePreview from '@/templates/ResumePreview';
import { useResumeState } from '@/hooks/useResumeState';
import { steps } from '@/utils/constants';
import { apiCall } from '@/utils/api';

export default function Home() {
  const { resume, setResume, template, setTemplate, accent, setAccent, font, setFont, atsScore } = useResumeState();
  const [step, setStep] = useState(0);
  const [loadingPdf, setLoadingPdf] = useState(false);
  const [token, setToken] = useState('');

  const onInlineEdit = (path, value) => {
    const [a, b] = path.split('.');
    setResume((prev) => ({ ...prev, [a]: { ...prev[a], [b]: value } }));
  };

  const smartAssist = async () => {
    try {
      const data = await apiCall('/ai/suggest', 'POST', { role: resume.personal.role, summary: resume.personal.summary });
      setResume((prev) => ({ ...prev, personal: { ...prev.personal, summary: data.summary } }));
    } catch {
      // graceful fallback
    }
  };

  const downloadPdf = async () => {
    setLoadingPdf(true);
    try {
      const data = await apiCall('/resume/export', 'POST', { resume, template, accent, font }, token || undefined);
      window.open(data.url, '_blank');
    } finally {
      setLoadingPdf(false);
    }
  };

  const saveResume = async () => {
    await apiCall('/resume', 'POST', { resume, template, accent, font, name: resume.personal.fullName || 'My Resume' }, token || undefined);
    alert('Resume saved successfully');
  };

  return (
    <>
      <Head>
        <title>Resume Builder Online Free | Create ATS-Friendly CV – Virajai</title>
      </Head>
      <main className="mx-auto max-w-[1600px] p-4">
        <h1 className="mb-4 text-2xl font-bold">VirajAI Resume / CV Maker</h1>
        <div className="mb-4 grid gap-4 lg:grid-cols-[420px_1fr]">
          <div className="space-y-4">
            <div className="card p-4">
              <p className="mb-2 text-xs text-zinc-400">Step {step + 1} / {steps.length}</p>
              <div className="mb-4 h-2 rounded bg-zinc-800"><div className="h-full rounded bg-viraj-orange" style={{ width: `${((step + 1) / steps.length) * 100}%` }} /></div>
              <ResumeForm step={step} setStep={setStep} resume={resume} setResume={setResume} onSmartAssist={smartAssist} />
            </div>
            <TemplateSelector template={template} setTemplate={setTemplate} accent={accent} setAccent={setAccent} font={font} setFont={setFont} />
            <SectionOrder order={resume.sectionOrder} setResume={setResume} />
            <ATSPanel atsScore={atsScore} role={resume.personal.role} />
            <div className="card p-4 space-y-2">
              <input className="input" placeholder="JWT Token (for premium save/history)" value={token} onChange={(e) => setToken(e.target.value)} />
              <div className="flex gap-2">
                <button className="btn-muted" onClick={saveResume}>Save Resume</button>
                <button className="btn-primary" onClick={downloadPdf} disabled={loadingPdf}>{loadingPdf ? 'Generating PDF...' : 'Download PDF'}</button>
              </div>
            </div>
          </div>

          <div className="card overflow-auto p-6">
            <ResumePreview resume={resume} template={template} accent={accent} font={font} onInlineEdit={onInlineEdit} />
          </div>
        </div>
      </main>
    </>
  );
}
