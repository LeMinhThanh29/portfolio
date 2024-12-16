import classNames from "classnames/bind";
import styles from "./scss/Switch.module.scss";
import { useContextPortfolio } from "../../context/Context";
const cx = classNames.bind(styles);
function Switch() {
  const context = useContextPortfolio();

  return (
    <div className={cx("switch_mode_row")}>
      <div className={cx("switch_mode_switch")}>
        <div
          className={cx("switch_mode_switch_container", {
            active: context?.initialState.switch,
          })}
        >
          <div
            className={cx("switch_mode_switch_button", {
              active: context?.initialState.switch,
            })}
            onClick={() => context?.dispatch({ type: "SWITCH" })}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Switch;
