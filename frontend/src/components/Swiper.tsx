import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function SwiperEmaple() {
    return <>
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            slidesPerView={3}
            loop={true}
            spaceBetween={20}
            coverflowEffect={{
                rotate: 40,
                stretch: 0,
                depth: 100,
                modifier: 1,
            }}
            modules={[EffectCoverflow]}
            className="swiper md:w-[90%]"
        >
            <SwiperSlide>
                <img src="/images/phone_1.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/phone_2.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/phone_3.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/phone_1.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/phone_2.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/phone_3.png" />
            </SwiperSlide>
        </Swiper >
    </>
}