import classNames from "classnames/bind";
import styles from './Home.module.scss';

import videos from "../../assets/videos";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

const cx = classNames.bind(styles);

function Home() {

    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
        }
    };


    return (
        <div className="grid grid-rows-5 lg:h-screen h-max gap-y-4 text-center mx-5">
            <div className="row-span-2 h-full mt-5 bg-home">
                <div className="grid grid-rows-3 h-full">
                    <div className="row-span-1">
                        <h1 className="lg:text-3xl text-lg float-left pt-6 pl-6">Welcome to <span style={{ color: "#9FDC6E" }}>TreeHub.</span></h1>
                    </div>
                    <div className="row-span-2">
                        <video className={cx('video')} src={videos.rain} autoPlay muted loop></video>
                    </div>
                </div>
            </div>
            <div className="row-span-2  h-full text-center items-center m-4">
                <div className="flex flex-col justify-center items-center text-center h-full">
                    <h1 className="h-1/4 text-center items-center text-2xl my-4">Hello</h1>
                    <div className="grid flex-1 h-full">
                        <Carousel
                            additionalTransfrom={0}
                            arrows
                            autoPlaySpeed={3000}
                            centerMode={false}
                            className=""
                            containerClass="container-with-dots"
                            dotListClass=""
                            draggable
                            focusOnSelect={false}
                            infinite
                            itemClass=""
                            keyBoardControl
                            minimumTouchDrag={80}
                            pauseOnHover
                            renderArrowsWhenDisabled={false}
                            renderButtonGroupOutside={false}
                            renderDotsOutside={false}
                            responsive={responsive}
                            rewind={false}
                            rewindWithAnimation={false}
                            rtl={false}
                            shouldResetAutoplay
                            showDots={false}
                            sliderClass=""
                            slidesToSlide={1}
                            swipeable
                        >
                            <div className="h-full bg-red-200 mx-3">Item 1</div>
                            <div className="h-full bg-red-200 mx-3">Item 2</div>
                            <div className="h-full bg-red-200 mx-3">Item 3</div>
                            <div className="h-full bg-red-200 mx-3">Item 4</div>
                            <div className="h-full bg-red-200 mx-3">Item 5</div>
                            <div className="h-full bg-red-200 mx-3">Item 6</div>
                            <div className="h-full bg-red-200 mx-3">Item 7</div>
                            <div className="h-full bg-red-200 mx-3">Item 8</div>
                        </Carousel>;
                    </div>
                </div>
            </div>
            <div className="row-span-1 h-3/4 bg-black rounded-md mb-5">
            </div>
        </div>
    );
}

export default Home;