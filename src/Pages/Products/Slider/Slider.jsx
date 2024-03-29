import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/FVhB82S/banner-2.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/sbmch2k/banner-3.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/1rmnSmG/banner-5.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/cbH23t3/banner-1.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/BzzWqJM/banner-4.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/DQcTm0X/banner-6.jpg" alt="" />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
