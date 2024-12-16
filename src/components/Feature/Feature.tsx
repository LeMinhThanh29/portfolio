import classNames from "classnames/bind";
import styles from "./scss/Feature.module.scss";
import bg1 from "../../assets/img/slider-2-2x.png";
import { useContextPortfolio } from "../../context/Context";
import RoadMap from "../Roadmap/RoadMap";
const cx = classNames.bind(styles);
const roadmap: string[] = [
  "Studied at FPT Polytechnic",
  "First Real Project at Mobifone",
  "First Freelance Project",
  "First Full-time Job at Fujinet",
  "Coursera",
];
const Feature = () => {
  const context = useContextPortfolio();

  return (
    <section
      className={cx("feature_container", {
        active: context?.initialState.switch,
      })}
    >
      <div className={cx("feature_row")}>
        <div className={cx("feature_left")}>
          <div className={cx("feauture_left_content")}>
            <h1>
              <p> Hello everyone.</p>
              <p>
                My name is <span>Le Minh Thanh</span>
              </p>
              <p>
                I'm <span>Software Engineer</span>
              </p>
            </h1>
            <div className={cx("feature_left_content_introduction")}>
              Highly motivated aspiring Full Stack Developer with strong
              programming skills and interest in web development frameworks
              (Java Spring Boot, React JS, Vue JS) seeking projects to gain
              real-world experience. Quick learner and strong team player eager
              to contribute valuable skills and collaboration.
            </div>
            <RoadMap roadmap={roadmap} title="Journey To Software Engineer" />
          </div>
        </div>
        <div className={cx("feature_right")}>
          <div className={cx("feature_right_content")}>
            <div className={cx("content_right")}>
              <h2>
                <img
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/web.png"
                  alt="web"
                />
                Front End
              </h2>
              <ul>
                <li>HTML & CSS & JavaScript</li>
                <li>React</li>
                <li>Vue.js</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
              </ul>

              <h2>
                <img
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/search-database.png"
                  alt="search-database"
                />
                Back End
              </h2>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Java</li>
                <li>Spring Boot</li>
                <li>Python</li>
                <li>Django</li>
                <li>MySQL & SQLServer</li>
              </ul>
            </div>
            <img
              src={bg1}
              alt=""
              className={cx("feature_right_content_banner")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
