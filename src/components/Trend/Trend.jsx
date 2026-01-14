
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

import './trend.css'
import TrendCard from '../TrendCard/TrendCard';

export default function Trend() {
  const [slides, setSlides] = useState([]);

  async function getMovies() {
    try {
      const { data } = await axios.get("/data/movieData.json");
      setSlides(data);
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section id='trend' className='trend'>
      <div className="container-fluid">
        <div className="row">
          <h4 className='section-title'>Coming Soon</h4>
        </div>
        <div className="row mt-4">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 25 },
              1024: { slidesPerView: 6, spaceBetween: 30 },
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className='trendSwiper'
          >
            {slides.length > 0 && slides.map(slide => (
              <SwiperSlide key={slide._id} className='Swiper-Slide'>
                <TrendCard slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
