export const templateOptions = [
  { id: 'professional', label: 'Professional ATS' },
  { id: 'minimal', label: 'Modern Minimal' },
  { id: 'creative', label: 'Creative Designer' },
  { id: 'corporate', label: 'Corporate Executive' },
  { id: 'compact', label: 'Compact One-Page' },
  { id: 'twocolumn', label: 'Two-Column Stylish' }
];

export const fontOptions = ['Inter', 'Georgia', 'Lato', 'Merriweather', 'Poppins', 'Roboto'];

export const steps = ['Personal', 'Experience', 'Education', 'Skills & Projects', 'Finalize'];

export const defaultResume = {
  personal: {
    fullName: '',
    role: '',
    summary: '',
    phone: '',
    email: '',
    location: '',
    linkedin: '',
    portfolio: '',
    github: ''
  },
  experience: [{ company: '', title: '', duration: '', responsibilities: [''] }],
  education: [{ degree: '', institution: '', year: '', score: '' }],
  skills: { technical: '', soft: '' },
  projects: [{ title: '', description: '', techStack: '', link: '' }],
  certifications: [''],
  languages: ['English'],
  achievements: [''],
  customSections: [],
  sectionOrder: ['summary', 'experience', 'education', 'skills', 'projects', 'certifications', 'languages', 'achievements']
};
