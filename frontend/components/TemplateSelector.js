import { templateOptions, fontOptions } from '@/utils/constants';

export default function TemplateSelector({ template, setTemplate, accent, setAccent, font, setFont }) {
  return (
    <div className="card p-4 space-y-3">
      <h3 className="font-semibold">Template & Style</h3>
      <select className="input" value={template} onChange={(e) => setTemplate(e.target.value)}>
        {templateOptions.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}
      </select>
      <select className="input" value={font} onChange={(e) => setFont(e.target.value)}>
        {fontOptions.map((f) => <option key={f} value={f}>{f}</option>)}
      </select>
      <label className="text-xs text-zinc-300">Accent Color</label>
      <input type="color" className="h-10 w-full rounded" value={accent} onChange={(e) => setAccent(e.target.value)} />
    </div>
  );
}
