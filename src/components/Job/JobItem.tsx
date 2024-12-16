import classNames from "classnames/bind";
import styles from "./scss/JobItem.module.scss";
import { JobItemModel } from "../../model/JobItemModel";
const cx = classNames.bind(styles);

function JobItem(props: JobItemModel) {
  const {
    imageCompany,
    company,
    employment_type,
    end_date,
    job_name,
    location,
    location_type,
    start_date,
  } = props;

  return (
    <div className={cx("job_section_body_left")}>
      <div className={cx("job_section_body_left_experience")}>
        <div className={cx("job_section_body_left_experience_body")}>
          <div className={cx("job_section_body_left_experience_body_content")}>
            <img src={imageCompany} alt={company} />
            <ul>
              <li>
                <strong>{job_name}</strong>
              </li>
              <li>Company or organization: {company}</li>
              <li>Employment type: {employment_type}</li>
              <li>
                Start date: {start_date.toLocaleDateString()} - End date:{" "}
                {end_date.toLocaleDateString()}
              </li>
              <li>
                Location: {location} - Location type: {location_type}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobItem;
