// Default CV data and commands
export const DEFAULT_CV_DATA = {
  name: 'Dmitrii Ivanov',
  title: 'Developer',
  age: 32,
  location: 'Moscow, Russia',
  education: [
    {
      degree: 'Specialist in Audiovisual Technology',
      school: 'Moscow Technical University of Communications and Informatics (MTUCI)',
      year: '2011–2017',
    },
    {
      degree: 'High School: information technology',
      school: 'Kursk, Russia',
      year: '2008–2011',
    }
  ],
  experience: [
    {
      role: 'Technical Support Specialist',
      company: 'Video Surveillance & Transport Tech Company',
      period: '2023–Present',
      description: [
        'Systematized equipment technical passports and wrote hundreds of device specifications.',
        'Hands-on experience with network protocols, presentations, and client training.',
        'Developed SPA PWA app for equipment docs (Electron/Android), alternative company website.',
        'Learned Python basics, deployed Django project, wrote automation scripts.',
        'Collected data for neural network training, tested/debugged models.',
        'Authored manuals, contributed to job descriptions, software registration page.',
        'Mastered Socket.IO, SheetJS, MVC; soldering, VM config, custom software builds.',
        'Tested cameras, recorders; worked with Jira, SAP ITSM, Bitrix24, Strive, Dolibarr.',
        'Maintained/upgraded network infra & access control, trained employees.',
        'Built Telegram bot (Grammy), refined tech requirements, assembled/maintained office equipment.'
      ].join('\n'),
    },
    {
      role: 'Engineer (Category I/II)',
      company: 'RTRS, Multiplexing Department',
      period: '2019–2021',
      description: [
        'Drafted technical instructions, designed multiplex schematics in Visio.',
        'Revived web dev skills: HTML/CSS, learned JavaScript, React.js.',
        'Project: Silicon Valley-inspired company website.'
      ].join('\n'),
    },
    {
      role: 'Transmitter Engineer',
      company: 'RTRS (Ostankino Tower)',
      period: '2017–2018',
      description: 'Studied workplace safety, learned HTML/CSS, continued English studies.'
    },
    {
      role: 'Technical Support Engineer',
      company: 'MorSvyazSputnik',
      period: '2022',
      description: 'Supported technical operations; resigned due to Russia-Ukraine conflict.'
    },
    {
      role: 'Data Engineer',
      company: 'RosHydroMet',
      period: '2011–2014, 2015–2016',
      description: 'Worked with mail servers, early Python, Unity, Maple, MathLab exposure.'
    },
    {
      role: 'Lab Assistant',
      company: 'MTUCI Physics Department',
      period: '2011–2014',
      description: 'Used C# for math/physics tasks.'
    },
    {
      role: 'Army Service',
      company: 'Russian Army',
      period: '2012',
      description: 'Learned about CCTV and access control systems.'
    }
  ],
  skills: [
    'JavaScript/TypeScript',
    'React/React Native',
    'Expo',
    'Redux',
    'Node.js',
    'Express.js',
    'Python (Django basics)',
    'Socket.IO',
    'SheetJS',
    'Electron',
    'HTML/CSS/SCSS',
    'Bootstrap',
    'jQuery',
    'Figma/Photoshop',
    'Gulp/Webpack',
    'Pug',
    'Git/GitHub',
    'Jira',
    'SAP ITSM',
    'Bitrix24',
    'Strive',
    'Dolibarr CRM',
    'Virtual machines',
    'Network protocols',
    'Soldering',
    'English (Upper-Intermediate, IELTS 6.5)',
    'German (Basic)',
    'Finnish (Basic)',
    'Team training',
    'Documentation',
    'Automation scripts',
    'Technical writing',
    'Project management',
    'Linux/Windows',
    'Telegram Bot (Grammy)'
  ],
  sideProjects: [
    'Learned German and Finnish',
    'Improved GitHub skills',
    'Collaborated on interactive screen apps for Troitsk House of Scientists',
    'Built PWA task manager (Weeky) with IndexDB/Redux',
    'Completed Expo tutorial',
    'Explored Socket.IO with Deno',
    'Developed mobile course app (Express.js backend)',
    'Started Next.js and Nest.js courses',
    'Built Next.js portfolio and Google Drive clone',
    'React Native PowerShell-style resume editor',
    'Daily coding challenges and Expo course on Stepik',
    'Experimenting with Lynx',
    'Various web projects: delivery landing, BEM form, café site, POS system, maze game',
    'Maintained and upgraded school website (HTML/CSS/PHP), explored Tilda/WordPress',
    'SIM card sales, ISP client onboarding'
  ]
};

export const COMMANDS = {
  'cv --help': 'Display available commands',
  'cv --name': 'Display name and title',
  'cv --education': 'Display education history',
  'cv --experience': 'Display work experience',
  'cv --skills': 'Display technical skills',
  'cv --all': 'Display complete CV in a formatted view',
  'edit --name <value>': 'Edit name (e.g., edit --name Dmitrii Ivanov)',
  'edit --title <value>': 'Edit title (e.g., edit --title "Developer")',
  'edit --location <value>': 'Edit location (e.g., edit --location "Moscow, Russia")',
  'edit --education': 'Add education entry (e.g., edit --education --degree "Specialist" --school "MTUCI" --year "2011–2018")',
  'edit --experience': 'Add experience entry (e.g., edit --experience --role "Engineer" --company "RTRS" --period "2019–2021" --description "Drafted technical instructions")',
  'edit --skills <value>': 'Add skill (e.g., edit --skills "Expo")',
  'clear': 'Clear terminal output',
  'clear cv': 'Reset CV to default values',
  'print': 'Print CV as PDF (web) or save as image (mobile)'
};
