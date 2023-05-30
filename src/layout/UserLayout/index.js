import classNames from "classnames/bind";
import style from "./UserLayout.module.scss";

import SideBar from "../../component/sideBar";
import { useState } from "react";

const cx = classNames.bind(style);


function UserLayout({ children }) {
    const [navbarExtending, setNavbarExtending] = useState(false);
    function decreaseMargin() {
      setNavbarExtending(!navbarExtending);
    }
    return (
      <div className="">
        <SideBar onExtend={decreaseMargin} />
        <div
          className={cx("content")}
          style={navbarExtending ? {} : { marginLeft: 65 }}
        >
          {children}
        </div>
      </div>
    );
}

export default UserLayout;