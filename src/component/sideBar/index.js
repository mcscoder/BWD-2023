import FeatureList from "../featureList";
import UserInfo from "../userInfo";

function SideBar() {
    return (
        <div className="w-full lg:h-screen bg-green-100 flex lg:flex-col justify-between">
            <FeatureList />
            <UserInfo />
        </div>
    );
}

export default SideBar;