import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "antd";

function UserInfo() {
    return ( 
        <div className="p-5 flex justify-between items-center flex-col gap-3 lg:border-t-2 border-gray-200">
           <div className="flex justify-center items-center gap-3 ">
                <Avatar>H</Avatar>
                <span className="">
                    hoàngcute
                </span>
           </div>
           <div className="flex justify-center items-center gap-3">
                <span>Đăng xuất</span>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
           </div>

        </div>
     );
}

export default UserInfo;