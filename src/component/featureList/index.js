import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function FeatureList() {
    return (
        <div className="mt-36 mx-auto w-4/5 text-center">
            <Link to={"/home"}>
                <div className="py-4 px-1 bg-blue-100 flex items-center my-6 gap-3">
                    <FontAwesomeIcon icon={faHouse} className="text-white ml-2 text-lg" />
                    <span className="text-lg">Home</span>
                </div>
            </Link>
            <Link to={"/home"}>
                <div className="py-4 px-1 bg-blue-100 flex items-center my-6 gap-3">
                    <FontAwesomeIcon icon={faHouse} className="text-white ml-2 text-lg" />
                    <span className="text-lg">Home</span>
                </div>
            </Link>
            <Link to={"/home"}>
                <div className="py-4 px-1 bg-blue-100 flex items-center my-6 gap-3">
                    <FontAwesomeIcon icon={faHouse} className="text-white ml-2 text-lg" />
                    <span className="text-lg">Home</span>
                </div>
            </Link>
            <Link to={"/home"}>
                <div className="py-4 px-1 bg-blue-100 flex items-center my-6 gap-3">
                    <FontAwesomeIcon icon={faHouse} className="text-white ml-2 text-lg" />
                    <span className="text-lg">Home</span>
                </div>
            </Link>
        </div>
    );
}

export default FeatureList;