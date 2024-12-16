import classNames from "classnames/bind";
import React from "react";
import styles from "./scss/Project.module.scss";
import Title from "../Title/Title";
import ProjectList from "./ProjectList";
const cx = classNames.bind(styles);
function Project() {
  return (
    <section className={cx("project_section_container")} id="myProject">
      <div className={cx("project_section_row")}>
        <Title text="Project" />
        <div className={cx("project_section_list_container")}>
          <ProjectList />
        </div>
      </div>
    </section>
  );
}

export default Project;
