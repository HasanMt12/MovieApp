import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import "swiper/css";
import "swiper/css/pagination";
import {  Autoplay ,  A11y, Navigation } from "swiper";
import 'swiper/css/scrollbar';
// Import Swiper React components
import "swiper/css/effect-coverflow";
import 'swiper/css/navigation';
import { useEffect, useState } from "react";

const Hero = () => {
    const [sampleMovies, setSampleMovies] = useState([]);
       useEffect(() => {
        // Data fetching code goes here
        const fetchData = async () => {
            try {
                const response = await fetch('slider.json');
                const data = await response.json();
                setSampleMovies(data)
                console.log(data);
                // Update state or do something with the fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="cover ">
              <Swiper className='w-[80%] mx-auto'
          slidesPerview={1.2}
           spaceBetween={10}
           breakpoints={{
             850: {
               slidesPerView: 5,
             },
             
           }}
          style={{
            paddingLeft :"15px",
            paddingRight: "15px",
            
          }}
          pagination={{
          clickable: true,
        }}
          loop={true}
            autoplay={{ delay: 1000,}}
           navigation={true}
            modules={[Navigation, Autoplay, A11y,]}
           
          >
           {
            sampleMovies && 
            sampleMovies.map((movie, key) => (
            <SwiperSlide key={key} className='my-20'>
                <div className="card">
                    <div className="wrapper">
                    <img src={movie.cardImg} className="cover-image" />
                    </div>

                    <img src={movie.titleImg} className="character" />
                </div>
              </SwiperSlide>
            ))
           }
            
           
              

                
          </Swiper>
        </div>
    );
};

export default Hero;