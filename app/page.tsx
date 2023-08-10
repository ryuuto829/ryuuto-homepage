'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function MySwiper() {
  return (
    <Swiper
      observer={true}
      slidesPerView={1}
      spaceBetween={64}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      loop={true}
      centeredSlides={true}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
      }}
      modules={[Pagination, Navigation]}
      className="relative"
    >
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <SwiperSlide key={i}>
          <div className="h-[200px] bg-white flex items-center justify-center">
            Slide {i}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default function Home() {
  return (
    <main>
      <p className="pt-[88px] text-3xl font-serif leading-[58px] w-[75vw]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        sollicitudin et nisl sed malesuada. Morbi nisl odio, ornare sit amet
        libero sollicitudin, ornare iaculis justo. Pellentesque consequat, ante
        et elementum porttitor, odio sem dapibus felis, at sollicitudin sapien
        mauris ac eros. Phasellus arcu mi, egestas ut ultricies id, maximus et
        libero.
      </p>
      <h2 className="uppercase font-sans font-medium">Select Project</h2>
      <MySwiper />
      <div className="h-[200px]"></div>
    </main>
  )
}
