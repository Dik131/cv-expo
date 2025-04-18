// Default CV data and commands
export const DEFAULT_CV_DATA = {
  name: 'John Doe',
  title: 'Senior Software Engineer',
  age: 30,
  location: 'New York, USA',
  education: [
    {
      degree: 'Master of Computer Science',
      school: 'Stanford University',
      year: '2018-2020',
    },
    {
      degree: 'Bachelor of Computer Science',
      school: 'MIT',
      year: '2014-2018',
    },
  ],
  experience: [
    {
      role: 'Senior Software Engineer',
      company: 'Tech Corp',
      period: '2020-Present',
      description: 'Leading development of cloud-native applications',
    },
    {
      role: 'Software Engineer',
      company: 'StartupX',
      period: '2018-2020',
      description: 'Full-stack development using React and Node.js',
    },
  ],
  skills: [
    'JavaScript/TypeScript',
    'React/React Native',
    'Node.js',
    'Python',
    'AWS',
    'Docker',
  ],
};

export const COMMANDS = {
  'cv --help': 'Display available commands',
  'cv --name': 'Display name and title',
  'cv --education': 'Display education history',
  'cv --experience': 'Display work experience',
  'cv --skills': 'Display technical skills',
  'cv --all': 'Display complete CV in a formatted view',
  'edit --name <value>': 'Edit name (e.g., edit --name John Smith)',
  'edit --title <value>': 'Edit title (e.g., edit --title "Full Stack Developer")',
  'edit --location <value>': 'Edit location (e.g., edit --location "San Francisco, USA")',
  'edit --education': 'Add education entry (e.g., edit --education --degree "PhD" --school "Harvard" --year "2020-2023")',
  'edit --experience': 'Add experience entry (e.g., edit --experience --role "CTO" --company "Tech Inc" --period "2023-Present" --description "Leading tech strategy")',
  'edit --skills <value>': 'Add skill (e.g., edit --skills "React Native")',
};
