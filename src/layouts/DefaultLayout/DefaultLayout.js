import NavBar from "../components/NavBar/NavBar";
import classNames from "classnames/bind";
import style from "./DefaultLayout.module.scss";
import { useState } from "react";

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
  const [navbarExtending, setNavbarExtending] = useState(false);
  function decreaseMargin() {
    setNavbarExtending(!navbarExtending);
  }
  return (
    <div className={cx("wrapper")}>
      <NavBar onExtend={decreaseMargin} />
      <div
        className={cx("content")}
        style={navbarExtending ? {} : { marginLeft: 65 }}
      >
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
