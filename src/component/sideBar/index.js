import styles from "./SideBar.scss";
import classNames from 'classnames/bind';

import FeatureList from "../featureList";
import UserInfo from "../userInfo";

const cx = classNames.bind(styles);


function SideBar() {
    return (
        <div className="w-full lg:h-screen bg-green-100 flex lg:flex-col justify-between">
            <div className={cx("list")}>
                <FeatureList />
            </div>
            <UserInfo />
        </div>
    );
}

export default SideBar;