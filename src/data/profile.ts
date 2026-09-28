// Everything on the site that describes Jerin lives here, so updating the
// portfolio usually means editing only this file (and the blog posts).
// Sources: resume, GitHub profile, getaix.com, pracmind.in and casagbic.com.

export const profile = {
  name: 'Jerin Jacob',
  firstName: 'Jerin',
  lastName: 'Jacob',
  role: 'Full-stack developer · React & Next.js',
  location: 'Kerala, India',
  available: true,
  tagline:
    'I build fast, secure web products: from a HIPAA-conscious healthcare platform on Google Cloud to a marketplace used by 500+ developers worldwide.',
  bio: 'Full-stack developer who turns complex requirements into intuitive, high-performance web applications with React, Next.js and Node.js.',
  motto: 'Mechanical engineer by degree, programmer by passion.',
  about: [
    'I started in ReactJS building responsive, data-heavy front ends for clients in Canada and the US, then grew into full-stack work: APIs, cloud infrastructure, CI/CD and the product decisions in between.',
    "Today I build PracMind, a practice-management platform for psychologists on Next.js and Google Cloud designed around HIPAA, and I've been running Getaix, my own multi-tenant marketplace, since 2021.",
    "Before code took over, I earned a B.Tech in Mechanical Engineering and trained 150+ students in CAD. Teaching taught me patience and how to explain complex things simply, which I still use every day with teams and clients.",
  ],
  email: '123jerinjacob007@gmail.com' as string | undefined,
  languages: ['Malayalam', 'English', 'Hindi'],
  hobbies: ['Programming', 'Reading', 'Music', 'Drawing', 'Marketing & analytics', 'Yoga'],
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jerinjacob-kerala/' },
    { label: 'GitHub', href: 'https://github.com/jerinjacob007' },
    { label: 'Getaix', href: 'https://getaix.com' },
  ],
};

export const stats = [
  { value: 500, suffix: '+', label: 'Developers using Getaix worldwide' },
  { value: 20, suffix: '%', label: 'Faster load times on a pension-fund dashboard' },
  { value: 150, suffix: '+', label: 'Engineering students trained in CAD' },
];

export type Project = {
  name: string;
  year: string;
  kind: 'Product' | 'Client work' | 'Archived';
  role: string;
  summary: string;
  highlights: string[];
  stack: string[];
  href?: string;
  status?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: 'PracMind',
    year: 'Latest',
    kind: 'Product',
    role: 'Full-stack developer',
    summary:
      'A practice-management workspace and therapist dashboard for psychologists and counsellors.',
    highlights: [
      'Session notes, assessments, client management and earnings tracking in one place.',
      'Built with Next.js and deployed on Google Cloud (GCP).',
      'Designed around HIPAA requirements for handling sensitive health data.',
    ],
    stack: ['Next.js', 'React', 'Google Cloud', 'HIPAA'],
    href: 'https://www.pracmind.in',
    featured: true,
  },
  {
    name: 'Getaix',
    year: '2021 – now',
    kind: 'Product',
    role: 'Technical lead & full-stack developer',
    summary:
      'A multi-tenant eCommerce marketplace for publishing and exploring extensions for MIT App Inventor and its clones.',
    highlights: [
      'Used by 500+ developers worldwide, with a content-management dashboard for sellers.',
      'Operational costs kept at zero through efficient resource management and cost-effective architecture.',
      'Automatic documentation generator for published extensions, plus cURL to Blocks, which turns any cURL command into App Inventor / Kodular blocks.',
    ],
    stack: ['React', 'Node.js', 'Multi-tenant', 'CMS dashboard'],
    href: 'https://getaix.com',
    featured: true,
  },
  {
    name: 'Pension fund metrics dashboard',
    year: '2022 – 2024',
    kind: 'Client work',
    role: 'Frontend developer (freelance)',
    summary:
      'A metrics dashboard and member website for a leading Canadian pension fund, on a large, data-driven codebase.',
    highlights: [
      'Reduced load times by 20% through code optimisation and best practices.',
      'Translated client designs into responsive, efficient code, from greenfield features to bug fixes.',
      'Shipped through Azure Pipelines CI/CD in an Agile team alongside UI/UX.',
    ],
    stack: ['React', 'JavaScript', 'Azure Pipelines', 'Agile'],
    featured: true,
  },
  {
    name: 'US client React apps',
    year: '2022 – 2023',
    kind: 'Client work',
    role: 'Frontend developer · BlueLeaf Technology',
    summary: 'Improved, refactored and extended React applications for BlueLeaf Technology’s US clients.',
    highlights: [
      'Optimised the apps for cross-platform devices and browsers.',
      'CI/CD with Jenkins.',
      'The client offered a full-time role for the quality of work and timely delivery.',
    ],
    stack: ['React', 'Jenkins', 'Cross-browser'],
  },
  {
    name: 'Casagbic',
    year: 'Earlier',
    kind: 'Archived',
    role: 'Developer',
    status: 'No longer active',
    summary:
      'A visual, drag-and-drop no-code builder for Android apps, based on the open-source MIT App Inventor.',
    highlights: ['Block-based app building in the browser, extended from the App Inventor codebase.'],
    stack: ['GWT', 'Java', 'JavaScript'],
    featured: true,
  },
  {
    name: 'Cybergenie.tech',
    year: 'Earlier',
    kind: 'Archived',
    role: 'Author',
    summary:
      'A blog with programming and tech write-ups, resources and tips to help beginners get started in development.',
    highlights: [],
    stack: ['Ghost CMS'],
  },
];

export const experience = [
  {
    period: 'Latest',
    title: 'Full-stack developer',
    org: 'PracMind',
    text: 'Building a practice-management platform for psychologists with Next.js on Google Cloud, designed around HIPAA.',
  },
  {
    period: '2021 – now',
    title: 'Technical lead & full-stack developer',
    org: 'Getaix (own product)',
    text: 'Built and run a multi-tenant extension marketplace used by 500+ developers, with zero operational cost.',
  },
  {
    period: '2022 – 2024',
    title: 'Frontend developer (ReactJS)',
    org: 'Freelance · Canadian pension fund',
    text: 'Metrics dashboard and member website; cut load times by 20%; Azure Pipelines CI/CD in an Agile team.',
  },
  {
    period: '2023 – 2024',
    title: 'CAD tutor',
    org: 'CADD International, Kerala',
    text: 'Taught SolidWorks, CATIA, Creo, ANSYS, AutoCAD and Primavera to 150+ students with custom learning plans.',
  },
  {
    period: '2022 – 2023',
    title: 'Frontend developer (ReactJS)',
    org: 'BlueLeaf Technology, Kerala',
    text: 'Refactored and extended React apps for US clients, with Jenkins CI/CD. Offered a full-time role by the client.',
  },
  {
    period: '2017 – 2021',
    title: 'B.Tech, Mechanical Engineering',
    org: 'Jyothi Engineering College, Thrissur',
    text: 'Where the engineering mindset (and the gears on this site) comes from.',
  },
];

export const testimonial = {
  quote: "I appreciate Jerin's supportive attitude and timely availability, which greatly benefited our team.",
  name: 'Athira Devi K.R.',
  role: 'PHP Developer, BlueLeaf Technology',
};

export const skills = {
  Frontend: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML & CSS'],
  'Backend & cloud': ['Node.js', 'Google Cloud (GCP)', 'API integration', 'Java', 'GWT'],
  Delivery: ['CI/CD', 'Azure Pipelines', 'Jenkins', 'Git', 'Agile'],
  Practices: ['Performance optimisation', 'HIPAA compliance', 'Multi-tenant design', 'Object-oriented design'],
  'Engineering (CAD)': ['SolidWorks', 'CATIA', 'Creo', 'ANSYS', 'AutoCAD'],
};
