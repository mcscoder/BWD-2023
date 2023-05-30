import classNames from "classnames/bind";
import styles from './Home.module.scss';

import videos from "../../assets/videos";

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className="grid grid-rows-5 lg:h-screen h-max gap-4 text-center mx-5">
            <div className="row-span-2 h-full mt-5 bg-home">
                <div className="grid grid-rows-3 h-full">
                    <div className="row-span-1">
                       <h1 className="lg:text-3xl text-lg float-left pt-6 pl-6">Welcome to <span style={{color: "#9FDC6E"}}>TreeHub.</span></h1>
                    </div>
                    <div className="row-span-2">
                        <video className={cx('video')} src={videos.rain} autoPlay muted loop></video>
                    </div>
                </div>
            </div>
            <div className="row-span-2  lg:h-full h-full text-center items-center">
                <div className="grid lg:grid-cols-3 grid-cols-2 text-center items-center h-full">
                    <div className="col-span-1 w-full h-3/5">
                        <div className="bg-yellow-50 h-full lg:w-3/4 w-1/2 m-auto">
                            hello
                        </div>
                    </div>
                    <div className="col-span-1 w-full h-3/5">
                        <div className="bg-yellow-50 h-full lg:w-3/4 w-1/2 m-auto">
                            hello
                        </div>
                    </div>
                    <div className="lg:col-span-1 col-span-2 w-full h-3/5 text-center items-center">
                        <div className="bg-yellow-50 h-full lg:w-3/4 w-1/2 m-auto">
                            hello
                        </div>
                    </div>
                </div>
            </div>
            <div className="row-span-1 h-3/4 bg-black rounded-md mb-5">
            </div>
        </div>
    );
}

export default Home;