export const profile = {
  name: 'Ravi',
  title: 'Full Stack Developer',
  tagline: 'I build clean, fast web experiences that solve real problems.',
  email: 'rvimca08@gmail.com',
  location: 'India',
  availability: 'Open to opportunities',
  social: {
    github: 'https://github.com/rvimca08',
    linkedin: 'https://linkedin.com/in/rvimca08',
    twitter: '',
  },
  resumeUrl: '#',
}

export const about = {
  paragraphs: [
    'I am a developer focused on crafting responsive, accessible, and performant web applications. I enjoy turning complex ideas into intuitive digital products.',
    'From frontend interfaces to backend APIs, I care about code quality, user experience, and shipping work that makes a measurable impact.',
  ],
  highlights: [
    { label: 'Experience', value: '3+ Years' },
    { label: 'Projects', value: '15+' },
    { label: 'Technologies', value: '20+' },
  ],
}

export const skills = [
  {
    category: 'Frontend',
    items: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'PHP', 'REST APIs', 'MySQL', 'MongoDB'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Vite', 'Figma', 'VS Code', 'Docker'],
  },
]

export const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack online store with product catalog, cart, checkout flow, and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Task Management App',
    description:
      'Collaborative task board with drag-and-drop, real-time updates, and team workspaces.',
    tags: ['React', 'Firebase', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio with smooth animations, dark theme, and contact form integration.',
    tags: ['React', 'Vite', 'EmailJS'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Weather Dashboard',
    description:
      'Location-based weather app with forecasts, charts, and responsive mobile layout.',
    tags: ['JavaScript', 'API', 'CSS'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
