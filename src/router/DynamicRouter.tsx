import { ReactNode } from "react";
import { ReactComponent as HomeIcon } from "../assets/icons/home-icon.svg";
import { ReactComponent as JobIcon } from "../assets/icons/job-icon.svg";
import { ReactComponent as MessageIcon } from "../assets/icons/message-icon.svg";
import { ReactComponent as SkillsIcon } from "../assets/icons/skills-icon.svg";
import { ReactComponent as ProjectIcon } from "../assets/icons/project-icon.svg";
export interface Router {
  title: string;
  icon: ReactNode;
  path: string;
}

export const router: Router[] = [
  {
    path: "#top",
    icon: <HomeIcon />,
    title: "Home",
  },
  {
    path: "#myskills",
    icon: <SkillsIcon />,
    title: "My Skills",
  },
  {
    path: "#job",
    icon: <JobIcon />,
    title: "Jobs",
  },
  
  {
    path: "#myProject",
    icon: <ProjectIcon />,
    title: "My Project",
  },
  {
    path: "#contact",
    icon: <MessageIcon />,
    title: "Contact",
  }
];
