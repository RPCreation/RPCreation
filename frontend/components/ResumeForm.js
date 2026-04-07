import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { resumeSchema } from '@/utils/validation';

export default function ResumeForm({ step, setStep, resume, setResume, onSmartAssist }) {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(resumeSchema.partial()),
    values: resume
  });

  const save = (data) => setResume((prev) => ({ ...prev, ...data }));

  const addItem = (path, item) => {
    setResume((prev) => ({ ...prev, [path]: [...prev[path], item] }));
  };

  return (
    <form onBlur={handleSubmit(save)} className="space-y-4">
      {step === 0 && (
        <div className="card p-4 space-y-3">
          <h3 className="text-lg font-semibold">Personal Details</h3>
          <input className="input" placeholder="Full Name" {...register('personal.fullName')} />
          <input className="input" placeholder="Job Title / Role" {...register('personal.role')} />
          <textarea className="input min-h-28" placeholder="Profile Summary" {...register('personal.summary')} />
          <div className="grid grid-cols-2 gap-2">
            <input className="input" placeholder="Phone" {...register('personal.phone')} />
            <input className="input" placeholder="Email" {...register('personal.email')} />
            <input className="input" placeholder="Location" {...register('personal.location')} />
            <input className="input" placeholder="LinkedIn" {...register('personal.linkedin')} />
            <input className="input" placeholder="Portfolio" {...register('personal.portfolio')} />
            <input className="input" placeholder="GitHub" {...register('personal.github')} />
          </div>
          <button type="button" className="btn-muted" onClick={onSmartAssist}>AI Improve Summary</button>
        </div>
      )}

      {step === 1 && (
        <div className="card p-4 space-y-3">
          <h3 className="text-lg font-semibold">Work Experience</h3>
          {resume.experience.map((_, i) => (
            <div key={i} className="rounded-lg border border-zinc-700 p-3 space-y-2">
              <input className="input" placeholder="Company Name" {...register(`experience.${i}.company`)} />
              <input className="input" placeholder="Job Title" {...register(`experience.${i}.title`)} />
              <input className="input" placeholder="Duration" {...register(`experience.${i}.duration`)} />
              <textarea className="input" placeholder="Responsibilities (one per line)" {...register(`experience.${i}.responsibilities.0`)} />
            </div>
          ))}
          <button type="button" className="btn-muted" onClick={() => addItem('experience', { company: '', title: '', duration: '', responsibilities: [''] })}>+ Add Experience</button>
        </div>
      )}

      {step === 2 && (
        <div className="card p-4 space-y-3">
          <h3 className="text-lg font-semibold">Education</h3>
          {resume.education.map((_, i) => (
            <div key={i} className="rounded-lg border border-zinc-700 p-3 space-y-2">
              <input className="input" placeholder="Degree" {...register(`education.${i}.degree`)} />
              <input className="input" placeholder="Institution" {...register(`education.${i}.institution`)} />
              <input className="input" placeholder="Year" {...register(`education.${i}.year`)} />
              <input className="input" placeholder="Percentage / CGPA" {...register(`education.${i}.score`)} />
            </div>
          ))}
          <button type="button" className="btn-muted" onClick={() => addItem('education', { degree: '', institution: '', year: '', score: '' })}>+ Add Education</button>
        </div>
      )}

      {step === 3 && (
        <div className="card p-4 space-y-3">
          <h3 className="text-lg font-semibold">Skills, Projects & Extras</h3>
          <input className="input" placeholder="Technical Skills (comma separated)" {...register('skills.technical')} />
          <input className="input" placeholder="Soft Skills (comma separated)" {...register('skills.soft')} />
          <div className="rounded-lg border border-zinc-700 p-3 space-y-2">
            <input className="input" placeholder="Project Title" {...register('projects.0.title')} />
            <textarea className="input" placeholder="Project Description" {...register('projects.0.description')} />
            <input className="input" placeholder="Tech Stack" {...register('projects.0.techStack')} />
            <input className="input" placeholder="Project Link" {...register('projects.0.link')} />
          </div>
          <input className="input" placeholder="Certifications" {...register('certifications.0')} />
          <input className="input" placeholder="Languages" {...register('languages.0')} />
          <input className="input" placeholder="Achievements / Awards" {...register('achievements.0')} />
        </div>
      )}

      <div className="flex items-center justify-between">
        <button type="button" className="btn-muted" onClick={() => setStep((s) => Math.max(0, s - 1))}>Previous</button>
        <button type="button" className="btn-primary" onClick={() => setStep((s) => Math.min(4, s + 1))}>Next</button>
      </div>
    </form>
  );
}
