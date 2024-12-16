import classNames from "classnames/bind";
import styles from "./scss/Job.module.scss";
import { useContextPortfolio } from "../../context/Context";
import JobList from "./JobList";
import Title from "../Title/Title";
const cx = classNames.bind(styles);
function Job() {
  const context = useContextPortfolio();
  return (
    <section
      className={cx("job_section_container", {
        active: context?.initialState.switch,
      })}
      id="job"
    >
      <div className={cx("job_section_row")}>
        <Title text="Experience" />
        <div className={cx("job_section_body")}>
        
          <JobList />
        </div>
      </div>
    </section>
  );
}

export default Job;
