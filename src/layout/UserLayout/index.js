import SideBar from "../../component/sideBar";

function UserLayout({ children }) {
    return (
        <div className="grid grid-cols-4">
            <div className="lg:col-span-1 col-span-4"><SideBar /></div>
            <div className="lg:col-span-3 col-span-4">{children}</div>
        </div>
    );
}

export default UserLayout;