import styles from "./SideBar.module.scss";
import classNames from 'classnames/bind';


import { useState } from "react";
import { NavLink } from "react-router-dom";
import { faBarsStaggered, faChartLine, faHouse, faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);


function SideBar({ onExtend = () => { } }) {
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
                    <FontAwesomeIcon icon={faBarsStaggered}></FontAwesomeIcon>
                </button>
                <div
                    className={cx("user-info-container")}
                    style={isExtending ? { paddingTop: 0 } : {}}
                >
                    <NavLink
                        to={"/"} // Change to user profile in future
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
                    <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                </button>
                {/* ------------------------------------------------ */}

                <div className={cx("nav-link-container")}>
                    <NavLink
                        to={"/"}
                        className={cx("link-item")}
                        style={
                            animationEnd ? { display: "flex", justifyContent: "center" } : {}
                        }
                    >
                        <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
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
                        to={"/search"}
                        className={cx("link-item")}
                        style={
                            animationEnd ? { display: "flex", justifyContent: "center" } : {}
                        }
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
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
                        to={"/chart"}
                        className={cx("link-item")}
                        style={
                            animationEnd ? { display: "flex", justifyContent: "center" } : {}
                        }
                    >
                        <FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon>
                        <span
                            className={cx("link-item-text", {
                                "fade-out-animation": !isExtending,
                                "display-none": animationEnd,
                            })}
                            onAnimationEnd={handleAnimationEnd}
                        >
                            Thống kê
                        </span>
                    </NavLink>

                    <NavLink
                        to={"/about-me"}
                        className={cx("link-item")}
                        style={
                            animationEnd ? { display: "flex", justifyContent: "center" } : {}
                        }
                    >
                        <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>
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

export default SideBar;