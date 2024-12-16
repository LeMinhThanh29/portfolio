import classNames from "classnames/bind";
import React from "react";
import styles from "./scss/Title.module.scss";
import { useContextPortfolio } from "../../context/Context";
interface TitleProps {
  text: string;
  color?: string;
}
const cx = classNames.bind(styles);
function Title(props: TitleProps) {
  const { text, color } = props;
  const context = useContextPortfolio();
  return (
    <div
      className={cx("title_group_container", {
        active: context?.initialState.switch,
      })}
    >
      <h1 style={{ color: color }}>{text}</h1>
    </div>
  );
}

export default Title;
