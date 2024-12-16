import classNames from "classnames/bind";
import React, { ReactNode, useEffect, useRef } from "react";
import styles from "./scss/Heading.module.scss";
import Switch from "../Switch/Switch";
import { useContextPortfolio } from "../../context/Context";
interface HeadingProps {
  children: ReactNode;
}
const cx = classNames.bind(styles);
const Heading = (props: HeadingProps) => {
  const { children } = props;
  const headerRef = useRef<HTMLHeadElement | null>(null);
  let prevScrollPos = useRef(window.scrollY);
  const context = useContextPortfolio();

  const handleScroll = () => {
    const currScrollPos = window.scrollY;
    const currHeaderElement = headerRef.current;

    if (!currHeaderElement) {
      return;
    }
    const scrollThreshold = 0.03 * document.documentElement.scrollHeight;
    if (currScrollPos > scrollThreshold) {
      currHeaderElement.style.transform =
        prevScrollPos.current > currScrollPos
          ? "translateY(0)"
          : "translateY(-200px)";
    } else {
      currHeaderElement.style.transform = "translateY(0)";
    }
    prevScrollPos.current = currScrollPos;
  };

  const checkScreenWidth = () => {
    if (window.innerWidth > 890) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }
  };

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={cx("header_container")}
    >
      <div className={cx("header_switch_mode")}>
        <div className={cx("header_switch_mode_row")}>
          <p>
            Current Mode:{" "}
            {context?.initialState.switch === false ? "Light" : "Dark"}
          </p>
          <Switch />
        </div>
      </div>
      {children}
    </header>
  );
};

export default Heading;
