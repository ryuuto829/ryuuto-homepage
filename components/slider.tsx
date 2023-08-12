'use client'

import 'swiper/css'
import 'swiper/css/pagination'
import { useCallback, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import type { Swiper as SwiperType } from 'swiper'

export default function Slider() {
  const sliderRef = useRef<SwiperType>()

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef?.current) return
    sliderRef.current.slideNext()
  }, [])

  return (
    <Swiper
      onBeforeInit={(swiper) => {
        sliderRef.current = swiper
      }}
      observer={true}
      modules={[Pagination]}
      pagination={{
        el: '.custom-pagination',
        clickable: true,
      }}
      centeredSlides={true}
      loop={true}
      spaceBetween={64}
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
      }}
    >
      {/* Slides */}
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <SwiperSlide key={i}>
          {({ isActive }) => (
            <div
              className={`${
                isActive ? '' : 'scale-90'
              } h-[500px] bg-black/5 flex items-center justify-center transition-all`}
            >
              Slide {i}
            </div>
          )}
        </SwiperSlide>
      ))}
      {/* Navigation */}
      <div className="hidden absolute z-10 inset-0 p-14 md:flex items-center justify-between pointer-events-none">
        <button
          onClick={handlePrev}
          className="bg-black/10 flex items-center justify-center rounded-full w-9 h-9 pointer-events-auto"
        >
          <ArrowLeftIcon className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="bg-black/10 flex items-center justify-center rounded-full w-9 h-9 pointer-events-auto"
        >
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>
      {/* Pagination */}
      <div className="custom-pagination md:hidden flex items-center justify-center gap-x-4 pt-6 [&_.swiper-pagination-bullet-active]:bg-black [&_.swiper-pagination-bullet]:w-3 [&_.swiper-pagination-bullet]:h-3 [&_.swiper-pagination-bullet]:cursor-pointer" />
    </Swiper>
  )
}
