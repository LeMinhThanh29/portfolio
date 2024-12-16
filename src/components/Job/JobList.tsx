import  { Fragment } from "react";
import { job_list, JobItemModel } from "../../model/JobItemModel";
import classNames from "classnames/bind";
import styles from "./scss/Job.module.scss";
import JobItem from "./JobItem";
const cx = classNames.bind(styles);
function JobList() {
  const groupedJobs = job_list.reduce((acc, job) => {
    const year = new Date(job.start_date).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(job);
    return acc;
  }, {} as Record<number, JobItemModel[]>);
  return (
    <Fragment>
      {Object.entries(groupedJobs).map(([year, jobs]) => (
        <div className={cx("job_section_body_grid")} key={year}>
          <h3>Year: {year}</h3>
          {jobs.map((job, idx) => (
            <JobItem key={idx} {...job} />
          ))}
        </div>
      ))}
    </Fragment>
  );
}

export default JobList;
