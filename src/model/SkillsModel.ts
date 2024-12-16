import icons from "./ImageExport";
export interface Skill {
  name: string;
  icon: string;
  rank: number;
}
export interface SkillRole {
  name: string;
  skills: Skill[];
}

export const frontEnd: Skill[] = [
  { name: "HTML", icon: icons.HTMLIcon, rank: 90 },
  { name: "CSS", icon: icons.CSSIcon, rank: 85 },
  { name: "JavaScript", icon: icons.JSIcon, rank: 80 },
  { name: "ReactJS", icon: icons.REACTJSIcon, rank: 75 },
  { name: "Redux", icon: icons.REDUXIcon, rank: 70 },
  { name: "Vue", icon: icons.VUEIcon, rank: 65 },
  { name: "SASS", icon: icons.SASSIcon, rank: 60 },
  { name: "Tailwind", icon: icons.TailwindIcon, rank: 55 },
  { name: "Figma", icon: icons.FigmaIcon, rank: 50 },
];

export const backEnd: Skill[] = [
  { name: "Java", icon: icons.JAVAIcon, rank: 70 },
  { name: "Spring", icon: icons.SpringIcon, rank: 65 },
  { name: "Python", icon: icons.PythonIcon, rank: 90 },
  { name: "Django", icon: icons.DjangoIcon, rank: 75 },
  { name: "Git", icon: icons.GitIcon, rank: 85 },
  { name: "SQL", icon: icons.SQLIcon, rank: 60 },
];

export const skillRole: SkillRole[] = [
  {
    name: "Front-End",
    skills: frontEnd,
  },
  {
    name: "Back-End",
    skills: backEnd,
  },
];
