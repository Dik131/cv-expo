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
            'Систематизация паспортов оборудования, составление спецификаций.',
            'Практический опыт с сетевыми протоколами, презентациями, обучением клиентов.',
            'Разработка SPA PWA для документации (Electron/Android), альтернативный сайт компании.',
            'Изучение основ Python, деплой Django, написание скриптов.',
            'Сбор данных для нейросетей, тестирование/отладка моделей.',
            'Написание инструкций, участие в описании вакансий, страница регистрации ПО.',
            'Socket.IO, SheetJS, MVC; пайка, настройка ВМ, сборка ПО.',
            'Тестирование камер, регистраторов; Jira, SAP ITSM, Bitrix24, Strive, Dolibarr.',
            'Обслуживание/апгрейд сети и СКУД, обучение сотрудников.',
            'Разработка Telegram-бота (Grammy), доработка требований, сборка/обслуживание офисной техники.'
          ].join('\n'),
        },
        {
          role: 'Инженер (I/II категории)',
          company: 'РТРС, отдел мультиплексирования',
          period: '2019–2021',
          description: [
            'Разработка инструкций, схем мультиплексирования в Visio.',
            'Восстановление навыков веб-разработки: HTML/CSS, изучение JavaScript, React.js.',
            'Проект: сайт компании в стиле Кремниевой долины.'
          ].join('\n'),
        },
        {
          role: 'Инженер-передатчик',
          company: 'РТРС (Останкинская башня)',
          period: '2017–2018',
          description: 'Изучение техники безопасности, HTML/CSS, продолжение изучения английского.'
        },
        {
          role: 'Инженер техподдержки',
          company: 'МорСвязьСпутник',
          period: '2022',
          description: 'Техническая поддержка; увольнение из-за конфликта РФ-Украина.'
        },
        {
          role: 'Инженер данных',
          company: 'РосГидроМетео',
          period: '2011–2014, 2015–2016',
          description: 'Работа с почтовыми серверами, ранний опыт с Python, Unity, Maple, MathLab.'
        },
        {
          role: 'Лаборант',
          company: 'МТУСИ, кафедра физики',
          period: '2011–2014',
          description: 'Использование C# для математических и физических задач.'
        },
        {
          role: 'Служба в армии',
          company: 'Российская армия',
          period: '2012',
          description: 'Знакомство с системами видеонаблюдения и СКУД.'
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
            'Systematisierte technische Pässe und schrieb Hunderte von Gerätespezifikationen.',
            'Praktische Erfahrung mit Netzwerkprotokollen, Präsentationen und Kundenschulungen.',
            'Entwicklung einer SPA PWA App für Gerätedokumente (Electron/Android), alternative Firmenwebsite.',
            'Grundlagen von Python gelernt, Django-Projekt bereitgestellt, Automatisierungsskripte geschrieben.',
            'Daten für neuronale Netzwerke gesammelt, Modelle getestet/debuggt.',
            'Handbücher verfasst, zu Stellenbeschreibungen beigetragen, Software-Registrierungsseite.',
            'Socket.IO, SheetJS, MVC; Löten, VM-Konfiguration, individuelle Software-Builds.',
            'Kameras, Rekorder getestet; Erfahrung mit Jira, SAP ITSM, Bitrix24, Strive, Dolibarr.',
            'Netzwerkinfrastruktur gewartet/aufgerüstet, Mitarbeiter geschult.',
            'Telegram-Bot (Grammy) gebaut, technische Anforderungen verfeinert, Büroausstattung montiert/gewartet.'
          ].join('\n'),
        },
        {
          role: 'Ingenieur (Kategorie I/II)',
          company: 'RTRS, Multiplex-Abteilung',
          period: '2019–2021',
          description: [
            'Technische Anweisungen entworfen, Multiplex-Schemata in Visio erstellt.',
            'Webentwicklung wiederbelebt: HTML/CSS, JavaScript, React.js gelernt.',
            'Projekt: Von Silicon Valley inspirierte Firmenwebsite.'
          ].join('\n'),
        },
        {
          role: 'Senderingenieur',
          company: 'RTRS (Ostankino-Turm)',
          period: '2017–2018',
          description: 'Arbeitssicherheit studiert, HTML/CSS gelernt, Englischkenntnisse vertieft.'
        },
        {
          role: 'Technischer Support-Ingenieur',
          company: 'MorSvyazSputnik',
          period: '2022',
          description: 'Technische Unterstützung; Kündigung wegen Russland-Ukraine-Konflikt.'
        },
        {
          role: 'Dateningenieur',
          company: 'RosHydroMet',
          period: '2011–2014, 2015–2016',
          description: 'Arbeit mit Mailservern, frühe Erfahrungen mit Python, Unity, Maple, MathLab.'
        },
        {
          role: 'Laborassistent',
          company: 'MTUCI Physikabteilung',
          period: '2011–2014',
          description: 'C# für mathematische/physikalische Aufgaben verwendet.'
        },
        {
          role: 'Militärdienst',
          company: 'Russische Armee',
          period: '2012',
          description: 'Erfahrung mit Videoüberwachungs- und Zugangskontrollsystemen.'
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
