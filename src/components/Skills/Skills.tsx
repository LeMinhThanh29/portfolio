import classNames from "classnames/bind";
import styles from "./scss/Skills.module.scss";
import { skillRole } from "../../model/SkillsModel";
import { useContextPortfolio } from "../../context/Context";
import Title from "../Title/Title";
const cx = classNames.bind(styles);

function Skills() {
  const context = useContextPortfolio();
  return (
    <section
      className={cx("skills_container", {
        active: context?.initialState.switch,
      })}
      id="myskills"
    >
      <div className={cx("skills_row")}>
        <div className={cx("skills_top")}>
        <Title text="Skillset" />
        </div>
        <div className={cx("skills_center")}>
          <div className={cx("skills_center_list")}>
            <div className={cx("skills_center_soft")}>
              <div className={cx("skills_center_soft_title")}>
                <h1>Soft Skills</h1>
              </div>
              <div className={cx("skills_center_soft__body")}>
                <ul className={cx("skills_center_soft_body_list")}>
                  <li>
                    <strong>Communication Skills</strong>: The ability to
                    express opinions clearly and effectively, both in writing
                    and speaking.
                  </li>
                  <li>
                    <strong>Teamwork Skills</strong>: The ability to work with
                    diverse colleagues, share ideas, offer support, and
                    contribute to achieving common goals.
                  </li>
                  <li>
                    <strong>Time Management Skills</strong>: The ability to
                    divide and organize time effectively to complete tasks and
                    projects.
                  </li>
                  <li>
                    <strong>Problem-Solving Skills</strong>: The ability to
                    analyze situations, find solutions, and make sound
                    decisions.
                  </li>
                  <li>
                    <strong>Creative Thinking Skills</strong>: The ability to
                    generate new ideas and approach problems in unique ways.
                  </li>
                  <li>
                    <strong>Technical Analysis Skills</strong>: The ability to
                    analyze technical details and understand how systems
                    operate.
                  </li>
                  <li>
                    <strong>Self-Learning Skills</strong>: The ability to
                    independently search for, absorb, and apply knowledge. This
                    involves researching and learning from various sources to
                    continuously improve.
                  </li>
                </ul>
              </div>
            </div>

            <div className={cx("skills_center_program_body")}>
              {skillRole.map((value, indexskillRole) => (
                <div
                  className={cx("skills_center_program_body_group")}
                  key={indexskillRole}
                >
                  <h1 className={cx("skills_center_program_body_group_title")}>
                    <span>{value.name}</span> Development Skills
                  </h1>
                  {value.skills.map((value, indexskills) => (
                    <div
                      key={indexskills}
                      className={cx("skills_center_program_body_item")}
                    >
                      <img src={value.icon} alt="" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
