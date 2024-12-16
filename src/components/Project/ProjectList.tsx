import classNames from "classnames/bind";
import React from "react";
import styles from "./scss/Project.module.scss";
import ProjectItem from "./ProjectItem";
import { projectData } from "../../model/ProjectModel";
const cx = classNames.bind(styles);
function ProjectList() {
  return (
    <div className={cx("project_section_list")}>
      {projectData.map((value, index) => (
        <ProjectItem key={index} {...value} />
      ))}
    </div>
  );
}

export default ProjectList;
