import classNames from "classnames/bind";
import styles from "./scss/RoadMap.module.scss";
import React from "react";
const cx = classNames.bind(styles);
interface RoadMapPros {
  title: string;
  roadmap: string[];
}
function RoadMap(props: RoadMapPros) {
  const { roadmap, title } = props;
  return (
    <div className={cx("roandmap")}>
      <h2 className={cx("roandmap_title")}>{title}</h2>
      <ul className={cx("roandmap_list")}>
        {roadmap.map((value, index) => (
          <li className={cx("roandmap_list_item")} key={index}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoadMap;
