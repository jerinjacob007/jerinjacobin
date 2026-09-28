// Everything on the site that describes Jerin lives here, so updating the
// portfolio usually means editing only this file (and the blog posts).
// Sources: GitHub profile + profile README (github.com/jerinjacob007),
// public repositories, getaix.com and casagbic.com.

export const profile = {
  name: 'Jerin Jacob',
  firstName: 'Jerin',
  lastName: 'Jacob',
  role: 'Full-stack developer & mechanical engineer',
  location: 'Kerala, India',
  available: true,
  tagline:
    'I build scalable React applications, enterprise-level products, no-code platforms and the little tools developers wish existed.',
  bio: "I'm a passionate full-stack web developer and mechanical engineer focused on building scalable React applications and developing enterprise-level products.",
  motto: 'Mechanical engineer by profession, programmer by passion.',
  about: [
    'I love to learn, develop and experiment with programs and awesome things on the internet.',
    'I create blogs and tutorials and help others enter the programming world. I also love no-code development: making powerful things accessible to people who never wanted to write a line of code.',
  ],
  githubJoined: 2016,
  publicRepos: 39,
  // Add your email / LinkedIn here to show them in the contact section.
  email: undefined as string | undefined,
  socials: [
    { label: 'GitHub', href: 'https://github.com/jerinjacob007' },
    { label: 'Getaix', href: 'https://getaix.com/user/jerinjacob' },
    { label: 'Getaix on X', href: 'https://x.com/getaix_com' },
  ],
};

export type Project = {
  name: string;
  year: string;
  kind: 'Platform' | 'Tool' | 'Library' | 'Experiment';
  summary: string;
  details?: string[];
  stack: string[];
  href?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: 'Getaix',
    year: 'Ongoing',
    kind: 'Platform',
    summary:
      'The largest marketplace for publishing and exploring extensions for MIT App Inventor, Kodular and their clones.',
    details: [
      'Developers publish extensions with an automatic documentation generator.',
      'cURL to Blocks turns any cURL command into ready-made App Inventor / Kodular blocks.',
      'A searchable App Inventor extension directory and a store for creators.',
    ],
    stack: ['React', 'Node.js'],
    href: 'https://getaix.com',
    featured: true,
  },
  {
    name: 'Casagbic',
    year: 'Ongoing',
    kind: 'Platform',
    summary:
      'A no-code Android app builder: drag and drop blocks to create real apps without writing code.',
    details: ['200+ components, multiple languages and built-in monetisation.'],
    stack: ['GWT', 'Java', 'JavaScript', 'HTML', 'CSS'],
    href: 'https://www.casagbic.com',
    featured: true,
  },
  {
    name: 'PetaFace',
    year: '2026',
    kind: 'Tool',
    summary:
      'Folder-based face identification: recognise people in photos against a local gallery of reference images.',
    details: [
      'Two recognition stacks: dlib (face_recognition) and InsightFace (buffalo_l / buffalo_sc).',
      'Batch CLI for folders plus a Streamlit UI for single uploads.',
    ],
    stack: ['Python', 'InsightFace', 'dlib', 'Streamlit'],
    repo: 'https://github.com/jerinjacob007/petaface',
    featured: true,
  },
  {
    name: 'Fast Image Annotator',
    year: '2025',
    kind: 'Tool',
    summary: 'A snappy in-browser image annotation and editing tool.',
    stack: ['Svelte 5', 'Vite', 'TypeScript'],
    repo: 'https://github.com/jerinjacob007/fast-image-annotator',
    featured: true,
  },
  {
    name: 'curlparser',
    year: '2024',
    kind: 'Library',
    summary: 'A TypeScript module that parses a cURL command and converts it to JSON.',
    stack: ['TypeScript'],
    repo: 'https://github.com/jerinjacob007/curlparser',
    featured: true,
  },
  {
    name: 'Birthday Blow',
    year: '2026',
    kind: 'Experiment',
    summary: 'An interactive birthday-wish web experience.',
    stack: ['Next.js 15', 'React 19', 'TypeScript'],
    repo: 'https://github.com/jerinjacob007/birthday-blow',
  },
  {
    name: 'Ask a Date',
    year: '2025',
    kind: 'Experiment',
    summary: 'A playful little page for asking someone out on a date.',
    stack: ['Next.js', 'React', 'TypeScript'],
    repo: 'https://github.com/jerinjacob007/ask-a-date',
  },
  {
    name: 'Electricity Bill Calculator',
    year: '2024',
    kind: 'Tool',
    summary:
      'Add appliances with wattage and hours used to get total consumption and an estimated bill.',
    stack: ['Next.js', 'TypeScript', 'CSS'],
    repo: 'https://github.com/jerinjacob007/electricity-bill-calculator',
  },
  {
    name: 'JExtensions',
    year: '2020',
    kind: 'Platform',
    summary:
      'My first store for buying and downloading App Inventor, Kodular and Thunkable extensions: the seed that grew into Getaix.',
    stack: ['HTML', 'Java'],
    repo: 'https://github.com/jerinjacob007/AIExtensions',
  },
  {
    name: 'Learn With Cybergenie',
    year: '2020',
    kind: 'Experiment',
    summary: 'A starter repository that helps beginners learn the basics of Git and GitHub.',
    stack: ['HTML', 'Python'],
    repo: 'https://github.com/jerinjacob007/Learn-With-Cybergenie',
  },
];

export const skills = {
  Frontend: ['React', 'Next.js', 'Svelte', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  Backend: ['Node.js', 'Java', 'GWT', 'Python', 'AWS Amplify'],
  'No-code': ['MIT App Inventor', 'Kodular', 'Extension development', 'Block generators'],
  'AI & vision': ['InsightFace', 'dlib', 'Streamlit'],
  Engineering: ['Mechanical engineering', 'C++', 'Problem solving'],
};

export const journey = [
  { year: '2016', title: 'Hello, GitHub', text: 'Joined GitHub and started experimenting with code alongside mechanical engineering.' },
  { year: '2020', title: 'Extensions & teaching', text: 'Launched JExtensions, a store for my App Inventor extensions, and Learn With Cybergenie to help beginners start with GitHub.' },
  { year: 'Then', title: 'Getaix & Casagbic', text: 'Grew the extension store into Getaix, the largest App Inventor extension marketplace, and worked on Casagbic, a no-code Android app builder.' },
  { year: '2024', title: 'Developer tooling', text: 'Shipped curlparser, an electricity bill calculator and experiments with AWS Amplify Gen 2 and Next.js.' },
  { year: '2025', title: 'Svelte 5', text: 'Built Fast Image Annotator with Svelte 5 and Vite.' },
  { year: '2026', title: 'Computer vision', text: 'Built PetaFace, a local face-identification tool powered by InsightFace and dlib.' },
];
