import classNames from "classnames/bind";
import React from "react";
import styles from "./scss/Footer.module.scss";
const cx = classNames.bind(styles);
function Footer() {
  return (
    <footer className={cx("footer_container")}>
      <footer className={cx("footer")}>
        <div className={cx("footer-title")}>Portfolio </div>
        <div className={cx("footer-links")}>
          <a href="#top">Home</a>
          <a href="#myskills">My Skill</a>
          <a href="#job">Jobs</a>
          <a href="#myProject">My Project</a>
          <a href="#contact">Contact</a>
        </div>
        <div className={cx("footer-info")}>
          &copy; 2024 Le Minh Thanh. All rights reserved.
        </div>
      </footer>
    </footer>
  );
}

export default Footer;
