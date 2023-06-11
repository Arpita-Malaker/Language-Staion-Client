import { Helmet } from "react-helmet-async";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax } from 'react-parallax';
import img1 from '../../assets/images/b5.jpg'
import img4 from '../../assets/images/banner.jpg'
import a2 from '../../assets/animation/FINAL.json'
import './home.css'
import Lottie from "lottie-react";
import PopularClassSection from "../PopularClassSection/PopularClassSection";
import PopularInstructorsSection from "../PopularInstructorsSection/PopularInstructorsSection";
import ExtraSection from "../ExtraSection/ExtraSection";
import { Bounce } from "react-awesome-reveal";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Language Station</title>
            </Helmet>
            <div>

                <Swiper
                    pagination={{
                        type: "fraction",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>



                        <div className="bg-sky-300 bg-img" >
                            <div className="hero h-[500px]">

                                <div className="hero-content text-center text-neutral-content">

                                    <div className="flex flrx-row">
                                        <div className="w-1/2 ">
           <Bounce>
           <p className="font-bold text-4xl text-white mt-10">Wellcome to <span className="text-amber-400">Language</span> <br /><span className="text-amber-400">Station</span>
                                            </p>
                                            <p className="text-2xl font bold text-white mt-3">Language Learning <span className=" text-amber-400">Website for Kids</span></p>
           </Bounce>
                                            <div className="mt-5"><button className="btn btn-warning">Start Your Free Trial</button></div>
                                        </div>
                                        <div className="w-9/12">
                                            <Lottie animationData={a2} loop={true} />
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>



                    </SwiperSlide>


                    <SwiperSlide>
                        <Parallax
                            blur={{ min: -15, max: 15 }}
                            bgImage={img4}
                            bgImageAlt="the dog"
                            strength={-200}
                        >
                            <div>
                                <div className="hero h-[500px]">
                                    <div className="hero-overlay bg-opacity-60"></div>
                                    <div className="hero-content text-center text-neutral-content ">
                    
                                    <div className="flex-row text-center">
                                  <div>  <p className="font-bold text-4xl text-white mt-10">Wellcome to <span className="text-amber-400">Language</span> <br /><span className="text-amber-400">Station</span>
                                            </p></div>

                                            <div className="mt-5"><button className="btn btn-warning">Start Your Free Trial</button></div>
                         

                                    </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </Parallax>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Parallax
                            blur={{ min: -15, max: 15 }}
                            bgImage={img1}
                            bgImageAlt="the dog"
                            strength={-200}
                        >
                            <div>
                                <div className="hero h-[500px]">
                                    <div className="hero-overlay bg-opacity-60"></div>
                                    <div className="hero-content text-center text-neutral-content">
                                        

                                            <p className="mm-5 text-2xl text-amber-400">Language lessons for kids inspire children to speak a second language while watching fun videos and cartoons.Language books for kids motivate children to read the beginner and advanced level stories.</p>

                                       
                                    </div>
                                </div>
                            </div>
                        </Parallax>
                    </SwiperSlide>
                   

                </Swiper>
            </div>

            <div><PopularClassSection></PopularClassSection></div>

            <div><PopularInstructorsSection></PopularInstructorsSection></div>
<div><ExtraSection></ExtraSection></div>


        </div>
    );
};

export default Home;