import { I18n } from 'i18n-js';

const i18n = new I18n();


// English translations
i18n.translations = {
  en: {
    about: {
      title: 'About This App',
      text1: 'This PowerShell-inspired CV app presents professional information in a unique terminal-style interface. Navigate through different sections using PowerShell-like commands to view education, work experience, and skills.',
      text2: 'Built with React Native and Expo, this app demonstrates creativity in presenting a traditional CV in a developer-friendly format.',
      text3: `Autor's web-site:`,
      website: 'https://ivanovdk-bc.netlify.app/'
    },
    cv: {
      name: 'Dmitrii Ivanov',
      title: 'Developer',
      age: '32',
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
            'React Native (Expo) developer focused on cross-platform applications.',
            'Experience with TypeScript, Zustand, Reanimated.',
            'Developed SPA PWA for documentation (Electron/Android).',
            'Creating adaptive interfaces for mobile, tablet and desktop.',
            'Working with Next.JS, NestJS, Express, Socket.IO, REST API.',
            'Experience in multilingual localization and custom animations.'
          ].join('\n'),
        }
      ],
      educationHistory: [
        {
          degree: 'Specialist in Audiovisual Technology',
          school: 'Moscow Technical University of Communications and Informatics (MTUCI)',
          year: '2011–2017',
        }
      ],
      skills: [
        'JavaScript/TypeScript',
        'React/React Native',
        'Expo',
        'Python (basics)',
        'Socket.IO',
        'SheetJS',
        'MVC',
        'Jira',
        'SAP ITSM',
        'Bitrix24',
        'Strive',
        'Dolibarr',
        'C#',
        'HTML/CSS',
        'Django',
        'Unity',
        'Maple',
        'Matlab',
        'Soldering',
        'VM config',
        'Custom software builds',
      ]
    },
    commands: {
      'cv --help': 'Display available commands',
      'cv --name': 'Display name and title',
      'cv --education': 'Display education history',
      'cv --experience': 'Display work experience',
      'cv --skills': 'Display skills',
      'cv --age': 'Display age',
      'cv --location': 'Display location',
      'cv --lang': 'Change language (en, ru, de)',
      'cv --about': 'About this app',
      'cv --print': 'Export CV as PDF',
      'cv --share': 'Share CV',
      'cv --clear': 'Clear terminal',
      'cv --reset': 'Reset CV data',
    },
    terminal: {
      availableCommands: 'Available commands:',
      name: 'Name',
      title: 'Title',
      location: 'Location',
      education: 'Education',
      experience: 'Experience',
      skills: 'Skills',
      age: 'Age',
      languageChanged: 'Language changed to',
      unknownCommand: 'Unknown command',
      about: 'About',
      welcome: 'Welcome to PowerShell CV Terminal',
      languageInstructions: "Type 'cv --lang ru|en|de' to change language or 'cv --help' to see available commands"
    }
  },
  ru: {
    about: {
      title: 'О приложении',
      text1: 'Это приложение-резюме в стиле PowerShell, которое представляет профессиональную информацию в уникальном терминальном интерфейсе. Используйте команды в стиле PowerShell для навигации по разделам образования, опыта работы и навыков.',
      text2: 'Создано с помощью React Native и Expo, это приложение демонстрирует творческий подход к представлению традиционного резюме в формате, удобном для разработчиков.',
      text3: 'Сайт автора:',
      website: 'https://ivanovdk-bc.netlify.app/'
    },
    cv: {
      name: 'Дмитрий Иванов',
      title: 'Разработчик',
      age: '32',
      location: 'Москва, Россия',
      education: [
        {
          degree: 'Специалист по аудиовизуальным технологиям',
          school: 'МТУСИ',
          year: '2011–2017',
        },
        {
          degree: 'Среднее образование: информационные технологии',
          school: 'Курск, Россия',
          year: '2008–2011',
        }
      ],
      experience: [
        {
          role: 'Специалист технической поддержки',
          company: 'Компания по видеонаблюдению и транспорту',
          period: '2023–н.в.',
          description: [
            'React Native (Expo) разработчик с фокусом на кроссплатформенные приложения.',
            'Опыт работы с TypeScript, Zustand, Reanimated.',
            'Разработка SPA PWA для документации (Electron/Android).',
            'Создание адаптивных интерфейсов для мобильных, планшетов и desktop.',
            'Работа с Next.JS, NestJS, Express, Socket.IO, REST API.',
            'Опыт в многоязычной локализации и кастомной анимации.'
          ].join('\n'),
        }
      ],
      educationHistory: [
        {
          degree: 'Специалист по аудиовизуальным технологиям',
          school: 'МТУСИ',
          year: '2011–2017',
        }
      ],
      skills: [
        'JavaScript/TypeScript',
        'React/React Native',
        'Expo',
        'Python (базовый)',
        'Socket.IO',
        'SheetJS',
        'MVC',
        'Jira',
        'SAP ITSM',
        'Bitrix24',
        'Strive',
        'Dolibarr',
        'C#',
        'HTML/CSS',
        'Django',
        'Unity',
        'Maple',
        'Matlab',
        'Пайка',
        'Настройка ВМ',
        'Сборка ПО',
      ]
    },
    commands: {
      'cv --help': 'Показать доступные команды',
      'cv --name': 'Показать имя и должность',
      'cv --education': 'Показать образование',
      'cv --experience': 'Показать опыт работы',
      'cv --skills': 'Показать навыки',
      'cv --age': 'Показать возраст',
      'cv --location': 'Показать местоположение',
      'cv --lang': 'Сменить язык (en, ru, de)',
      'cv --about': 'О приложении',
      'cv --print': 'Экспортировать CV в PDF',
      'cv --share': 'Поделиться CV',
      'cv --clear': 'Очистить терминал',
      'cv --reset': 'Сбросить данные CV',
    },
    terminal: {
      availableCommands: 'Доступные команды:',
      name: 'Имя',
      title: 'Должность',
      location: 'Местоположение',
      education: 'Образование',
      experience: 'Опыт работы',
      skills: 'Навыки',
      age: 'Возраст',
      languageChanged: 'Язык изменён на',
      unknownCommand: 'Неизвестная команда',
      about: 'О приложении',
      welcome: 'Добро пожаловать в PowerShell CV Terminal',
      languageInstructions: "Введите 'cv --lang ru|en|de' для смены языка или 'cv --help' для просмотра доступных команд"
    }
  },
  de: {
    about: {
      title: 'Über diese App',
      text1: 'Diese PowerShell-inspirierte Lebenslauf-App präsentiert berufliche Informationen in einer einzigartigen Terminal-Oberfläche. Navigieren Sie mit PowerShell-ähnlichen Befehlen durch die Bereiche Ausbildung, Berufserfahrung und Fähigkeiten.',
      text2: 'Erstellt mit React Native und Expo, zeigt diese App Kreativität bei der Präsentation eines traditionellen Lebenslaufs im Entwicklerformat.',
      text3: 'Webseite des Autors:',
      website: 'https://ivanovdk-bc.netlify.app/'
    },
    cv: {
      name: 'Dmitrii Ivanov',
      title: 'Entwickler',
      age: '32',
      location: 'Moskau, Russland',
      education: [
        {
          degree: 'Spezialist für audiovisuelle Technik',
          school: 'Moskauer Technische Universität für Kommunikation und Informatik (MTUCI)',
          year: '2011–2017',
        },
        {
          degree: 'Abitur: Informationstechnologie',
          school: 'Kursk, Russland',
          year: '2008–2011',
        }
      ],
      experience: [
        {
          role: 'Technischer Support-Spezialist',
          company: 'Videoüberwachungs- & Transporttechnikunternehmen',
          period: '2023–Heute',
          description: [
            'React Native (Expo) Entwickler mit Fokus auf plattformübergreifende Anwendungen.',
            'Erfahrung mit TypeScript, Zustand, Reanimated.',
            'Entwicklung einer SPA PWA für Dokumentation (Electron/Android).',
            'Erstellung adaptiver Benutzeroberflächen für Mobile, Tablet und Desktop.',
            'Arbeit mit Next.JS, NestJS, Express, Socket.IO, REST API.',
            'Erfahrung in mehrsprachiger Lokalisierung und individueller Animation.'
          ].join('\n'),
        }
      ],
      educationHistory: [
        {
          degree: 'Spezialist für audiovisuelle Technik',
          school: 'Moskauer Technische Universität für Kommunikation und Informatik (MTUCI)',
          year: '2011–2017',
        }
      ],
      skills: [
        'JavaScript/TypeScript',
        'React/React Native',
        'Expo',
        'Python (Grundlagen)',
        'Socket.IO',
        'SheetJS',
        'MVC',
        'Jira',
        'SAP ITSM',
        'Bitrix24',
        'Strive',
        'Dolibarr',
        'C#',
        'HTML/CSS',
        'Django',
        'Unity',
        'Maple',
        'Matlab',
        'Löten',
        'VM-Konfiguration',
        'Individuelle Software-Builds',
      ]
    },
    commands: {
      'cv --help': 'Verfügbare Befehle anzeigen',
      'cv --name': 'Name und Titel anzeigen',
      'cv --education': 'Ausbildung anzeigen',
      'cv --experience': 'Berufserfahrung anzeigen',
      'cv --skills': 'Fähigkeiten anzeigen',
      'cv --age': 'Alter anzeigen',
      'cv --location': 'Standort anzeigen',
      'cv --lang': 'Sprache wechseln (en, ru, de)',
      'cv --about': 'Über diese App',
      'cv --print': 'Lebenslauf als PDF exportieren',
      'cv --share': 'Lebenslauf teilen',
      'cv --clear': 'Terminal löschen',
      'cv --reset': 'Lebenslauf zurücksetzen',
    },
    terminal: {
      availableCommands: 'Verfügbare Befehle:',
      name: 'Name',
      title: 'Titel',
      location: 'Standort',
      education: 'Ausbildung',
      experience: 'Berufserfahrung',
      skills: 'Fähigkeiten',
      age: 'Alter',
      languageChanged: 'Sprache geändert zu',
      unknownCommand: 'Unbekannter Befehl',
      about: 'Über diese App',
    }
  }
};

i18n.locale = 'ru';
i18n.enableFallback = true;

export default i18n;
