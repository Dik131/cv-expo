import i18n from '../i18n';

export type Education = {
  degree: string;
  school: string;
  year: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export type CvData = {
  name: string;
  title: string;
  age: string | number;
  location: string;
  education: Education[];
  experience: Experience[];
  skills: string[];
};

export function getCvData(i18nInst = i18n): CvData {
  const cv = i18nInst.translations[i18nInst.locale]?.cv || i18nInst.translations.en.cv;
  return {
    name: cv.name,
    title: cv.title,
    age: cv.age,
    location: cv.location,
    education: cv.education,
    experience: cv.experience,
    skills: cv.skills,
  };
}

export function getCommands(i18nInst = i18n) {
  return i18nInst.translations[i18nInst.locale]?.commands || i18nInst.translations.en.commands;
}

// Export a default CV data constant (using default locale)
export const DEFAULT_CV_DATA = getCvData();

// Optionally, export default commands
export const DEFAULT_COMMANDS = getCommands();
