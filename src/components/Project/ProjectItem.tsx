import classNames from "classnames/bind";
import styles from "./scss/ProjectItem.module.scss";
import { useDraggable } from "react-use-draggable-scroll";
import { useRef } from "react";
import member from "../../assets/icons/member.png";
import progress from "../../assets/icons/progress.png";
import { ProjectModel } from "../../model/ProjectModel";
import { formattedDate } from "../../utils/DateFormatter";
const cx = classNames.bind(styles);
function ProjectItem(props: ProjectModel) {
  const {
    project_company,
    project_description,
    project_end_date,
    project_link,
    project_name,
    project_quanlity_member,
    project_role,
    project_start_date,
    project_status,
    project_tech,
    project_progress,
  } = props;
  const ref = useRef<HTMLUListElement>(null);
  const { events } = useDraggable(ref as React.MutableRefObject<HTMLElement>);
  return (
    <div
      className={cx(
        "project_item_container",
        project_status.status_id === 1
          ? "in_progress"
          : project_status.status_id === 2
          ? "completed"
          : "paused"
      )}
    >
      <h3>{project_status.status}</h3>
      <div className={cx("project_item_row")}>
        <div className={cx("project_item_body")}>
          <div className={cx("project_item_title")}>
            <div className={cx("project_item_body_content")}>
              <h1>
                <a href={project_link}>{project_company}</a>
              </h1>
              <p>Project Name: {project_name}</p>
              <p>Role: {project_role}</p>
            </div>
          </div>
          <div className={cx("project_item_body_description")}>
            <h4>Description</h4>
            <p>{project_description}</p>
          </div>
          <div className={cx("project_item_body_technology")}>
            <h4>Technology</h4>
            <ul ref={ref} {...events}>
              {project_tech.map((tech) => (
                <li className={cx(tech.tech.toLowerCase())} key={tech.tech_id}>
                  {tech.tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={cx("project_item_footer")}>
          <div className={cx("project_item_info")}>
            <div className={cx("project_item_progress")}>
              <img src={progress} alt="" />
              <span>Progress:</span>
              <p>{project_progress}%</p>
            </div>
            <div className={cx("project_item_member")}>
              <img src={member} alt="" />
              <span>Team Size:</span>
              <p>{project_quanlity_member}</p>
            </div>
          </div>
          <div className={cx("project_item_date")}>
            {formattedDate(project_start_date)} -{" "}
            {formattedDate(project_end_date)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
