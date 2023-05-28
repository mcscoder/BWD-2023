import classNames from "classnames/bind";
import style from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
import { routes } from "../../../config/routes";
import { useState } from "react";

const cx = classNames.bind(style);

function NavBar({ onExtend = () => {} }) {
  const [isExtending, setExtending] = useState(false);
  const [animationEnd, setAnimationEnd] = useState(false);

  function toggleNavbar() {
    onExtend();
    setExtending(!isExtending);
    if (animationEnd) {
      setAnimationEnd(false);
    }
  }

  function handleAnimationEnd() {
    setAnimationEnd(!animationEnd);
  }

  return (
    <div className={cx("side-navbar", { "extend-side-bar": isExtending })}>
      <div className={cx("navbar-content")}>
        <button
          className={cx("toggle-btn")}
          onClick={toggleNavbar}
          style={isExtending ? { opacity: 0, pointerEvents: "none" } : {}}
        >
          <i className="fa-solid fa-bars-staggered"></i>
        </button>
        <div
          className={cx("user-info-container")}
          style={isExtending ? { paddingTop: 0 } : {}}
        >
          <NavLink
            to={routes.profile} // Change to user profile in future
            className={cx("user-img", {
              "mini-img": !isExtending,
            })}
          />
          <span
            className={cx("user-name")}
            style={isExtending ? {} : { display: "none" }}
          >
            Uchi hahahahaha
          </span>
        </div>

        <button
          className={cx("mini-navbar-btn")}
          onClick={toggleNavbar}
          style={isExtending ? {} : { display: "none" }}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        {/* ------------------------------------------------ */}

        <div className={cx("nav-link-container")}>
          <NavLink
            to={routes.home}
            className={cx("link-item")}
            style={
              animationEnd ? { display: "flex", justifyContent: "center" } : {}
            }
          >
            <i className="fa-solid fa-house"></i>
            <span
              className={cx("link-item-text", {
                "fade-out-animation": !isExtending,
                "display-none": animationEnd,
              })}
              onAnimationEnd={handleAnimationEnd}
            >
              Home
            </span>
          </NavLink>

          <NavLink
            to={routes.search}
            className={cx("link-item")}
            style={
              animationEnd ? { display: "flex", justifyContent: "center" } : {}
            }
          >
            <i className="fa-solid fa-magnifying-glass"></i>
            <span
              className={cx("link-item-text", {
                "fade-out-animation": !isExtending,
                "display-none": animationEnd,
              })}
              onAnimationEnd={handleAnimationEnd}
            >
              search
            </span>
          </NavLink>

          <NavLink
            to={routes.about}
            className={cx("link-item")}
            style={
              animationEnd ? { display: "flex", justifyContent: "center" } : {}
            }
          >
            <i className="fa-regular fa-circle-question"></i>
            <span
              className={cx("link-item-text", {
                "fade-out-animation": !isExtending,
                "display-none": animationEnd,
              })}
              onAnimationEnd={handleAnimationEnd}
            >
              About
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
