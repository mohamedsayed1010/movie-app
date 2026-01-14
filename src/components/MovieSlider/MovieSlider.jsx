import './movieSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



export default function MovieSlider({ slides , handlechange }) {
  return (
    <Swiper
      effect="coverflow"
      grabCursor
      centeredSlides
      slidesPerView="auto"
      loop={slides.length > 4}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      coverflowEffect={{
        rotate: 50,
        depth: 100,
        slideShadows: true,
      }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="movieSlider"
    >
      {slides.map((movie) => (
        <SwiperSlide key={movie._id} className='Swiper-Slide'>
          <img src={movie.previewImg} alt={movie.title} onClick={()=>handlechange(movie._id )} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

