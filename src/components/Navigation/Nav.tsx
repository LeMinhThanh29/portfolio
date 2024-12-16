import React, { useEffect, useState } from "react";
import styles from "./scss/Nav.module.scss";
import classNames from "classnames/bind";
import { router } from "../../router/DynamicRouter";
import Switch from "../Switch/Switch";
import { useContextPortfolio } from "../../context/Context";

const cx = classNames.bind(styles);
const Nav = () => {
  const [activeHash, setActiveHash] = useState("");
  const context = useContextPortfolio();
  const handleHashChange = () => {
    setActiveHash(window.location.hash); // Cập nhật giá trị active khi hash thay đổi
  };
  // Khi nhấn vào bất kỳ đâu ngoài input, set lại click thành false
  useEffect(() => {
    // Gắn sự kiện khi hash thay đổi
    window.addEventListener("hashchange", handleHashChange);

    // Kiểm tra lần đầu tiên khi trang được tải
    setActiveHash(window.location.hash);

    // Dọn dẹp sự kiện khi component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleClick = (anchor: string) => () => {
    const newHref = anchor.replace(/\/#/, "");
    const id = `${newHref}-section`;
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={cx("navigation_container", {
        active: context?.initialState.switch,
      })}
    >
      <div className={cx("navigation_row")}>
        <div className={cx("navigation_left")}>
          <div className={cx("logo")}>
            <a
              href="#top"
              className={cx("logo_image", {
                active: context?.initialState.switch,
              })}
            >
              <span
                className={cx("span", {
                  active: context?.initialState.switch,
                })}
              >
                leminhthanh.neo77
              </span>
            </a>
          </div>
        </div>
        <div className={cx("navigation_right")}>
          <ul>
            {router.map((value, index) => (
              <li
                key={index}
                className={
                  activeHash === value.path ? cx("navigation_item_active") : ""
                }
              >
                <a href={value.path} onClick={handleClick(value.path)}>
                  {value.icon}
                  <span className={cx("span_navigation")}>{value.title}</span>
                </a>
              </li>
            ))}
            <li>
              <Switch />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
