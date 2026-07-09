import fullstackImg from '../assets/fullstack.jpg'
import reviewVideo from '../assets/review.mp4'
import stackImg from '../assets/stack2.jpg'
import resumePdf from '../assets/ravi_mern.pdf'

export const media = {
  fullstack: fullstackImg,
  review: reviewVideo,
  stack: stackImg,
}

export const profile = {
  name: 'Ravichandran',
  title: 'Software Developer',
  roles: ['Full Stack Developer', 'Backend Engineer', 'Mobile App Developer'],
  headline: 'Building Scalable',
  headlineAccent: 'Digital Experiences',
  quote:
    'Hi, I\'m Ravichandran — a Software Developer crafting modern, high-performance applications with Laravel, MERN stack, and React Native.',
  email: 'rvimca08@gmail.com',
  phone: '6379517503',
  phoneDisplay: '+91 63795 17503',
  location: 'Chennai, India',
  company: 'The NexGen Tech',
  social: {
    github: 'https://github.com/ravidev24/',
    linkedin: 'https://www.linkedin.com/in/ravichandran-m-432sa/',
    whatsapp:
      'https://wa.me/916379517503?text=Hi%20Ravichandran%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.',
  },
  resumeUrl: resumePdf,
  resumeFileName: 'Ravichandran_Resume.pdf',
}

export const about = {
  eyebrow: 'About Me',
  title: 'Engineering Real-World Solutions',
  paragraphs: [
    'Software Developer with 2+ years of experience in full stack, backend, and mobile development — building CMS platforms, workflow automation, and real-time enterprise systems.',
    'I design scalable REST APIs, OAuth/JWT authentication, microservices, and Redis-powered applications that are secure, maintainable, and production-ready.',
  ],
  image: stackImg,
}

export const stats = [
  { value: '2+', label: 'Years Experience', description: 'Full stack, backend & mobile development' },
  { value: '10+', label: 'Projects Completed', description: 'CMS, workflow, MERN & mobile apps' },
]

export const services = [
  {
    number: '01',
    category: 'Engineering',
    title: 'Full Stack Development',
    description:
      'End-to-end web applications with Laravel, React.js, and Node.js — from database design to polished UI.',
  },
  {
    number: '02',
    category: 'Backend',
    title: 'REST API & Microservices',
    description:
      'Scalable APIs, OAuth security, RBAC, Redis caching, and modular microservices for enterprise workflows.',
  },
  {
    number: '03',
    category: 'Mobile',
    title: 'React Native Applications',
    description:
      'Cross-platform mobile apps with React Native CLI & Expo, integrated with Laravel backends and real-time sync.',
  },
  {
    number: '04',
    category: 'Real-Time',
    title: 'Workflow Automation',
    description:
      'Multi-level approval engines with WebSockets, Redis Pub/Sub, and live dashboards for business operations.',
  },
]

export const experience = [
  {
    number: '01',
    role: 'Software Developer',
    company: 'The NexGen Tech, Chennai',
    period: 'Apr 2024 – Present',
    summary:
      'Building enterprise CMS platforms, approval workflows, and microservices with Laravel, React.js, Redis, and WebSockets.',
    tags: ['Laravel', 'React.js', 'MySQL', 'Redis', 'OAuth', 'WebSockets'],
  },
]

export const technicalSkills = [
  'Laravel',
  'PHP',
  'React.js',
  'Node.js',
  'Express.js',
  'MySQL',
  'MongoDB',
  'Redis',
  'React Native',
  'JavaScript',
  'REST APIs',
  'OAuth',
  'JWT',
  'WebSockets',
  'Git',
  'GitHub',
  'Bootstrap',
  'Tailwind CSS',
]

export const projects = [
  {
    title: 'CMS Platform',
    description:
      'Enterprise content management platform with dynamic modules, admin controls, and role-based access. OAuth-secured APIs with Redis caching for high performance.',
    tags: ['Laravel', 'React.js', 'MySQL', 'OAuth', 'Redis'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Approval Workflow Automation',
    description:
      'Configurable multi-level approval engine with real-time notifications via WebSockets and Redis Pub/Sub, plus live React dashboards for tracking.',
    tags: ['Laravel', 'React.js', 'WebSockets', 'Redis'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Chennai Parking System',
    description:
      'MERN stack parking management with vehicle tracking, slot management, reservations, and responsive admin dashboards.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Eloupra QR Scanner App',
    description:
      'Cross-platform React Native app with QR validation, Laravel API integration, and real-time data synchronization.',
    tags: ['React Native', 'Laravel API', 'MySQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export const codeSnippets = {
  hero: `export const initPortfolio = async () => {
  const dev = createDeveloper('Ravichandran');
  const stack = ['Laravel', 'React', 'Node'];
  return dev.build({ location: 'Chennai', stack });
};`,
}
