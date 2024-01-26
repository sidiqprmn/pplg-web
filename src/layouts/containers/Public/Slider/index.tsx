import React from 'react'
import Buttons from 'components/Button/Buttons'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import required modules
import { FreeMode, Navigation, Pagination } from 'swiper/modules'
import { useRouter } from 'next/router'
import beritaData from 'data/beritaData'
import Search from 'components/Search/Search'
import Link from 'next/link'
import { Button } from 'antd'

interface ISwiper {
  title?: String
  container?: string
  swiperStyle?: string
}

function Slider(props: ISwiper) {
  const { title, container, swiperStyle } = props
  const router = useRouter()
  const { pathname } = router
  return (
    <div className={container}>
      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        freeMode
        pagination={{
          dynamicBullets: true,
        }}
        modules={[FreeMode, Navigation, Pagination]}
        className={`${swiperStyle} relative`}
      >
        {pathname !== '/' && (
          <div className="w-full flex justify-between absolute top-0">
            <h3 className="text-[32px] text-[#484C57] leading-[48px] font-semibold ">
              {title}
            </h3>
            <Search className="rounded-[10px]" placeholder="Artitel Sekolah" />
          </div>
        )}

        {pathname === '/' && (
          <Link href="/detailartikel">
            <div className="bg-gradient-to-r from-transparent to-white w-[200px] h-[100%] absolute top-0 right-0 z-[1] md:hidden" />
          </Link>
        )}

        {pathname === '/' && (
          <Link href="/detailartikel">
            <div className="bg-gradient-to-r from-white to-transparent w-[200px] h-[100%] absolute top-0 z-[1] md:hidden" />
          </Link>
        )}
        <Buttons.ButtonSlidePrev
          className="bg-[#dee7ff] rounded-full w-[40px] h-[40px] absolute top-[130px] z-10 left-[10px] md:hidden"
          icon="./static/images/icons/chevron-left-blue.png"
        />
        <Buttons.ButtonSlideNext
          className="bg-[#273763] rounded-full w-[40px] h-[40px] absolute top-[130px] z-10 right-[10px] md:hidden"
          icon="./static/images/icons/chevron-right-white.png"
        />
        {beritaData.map((data, index) => (
          <SwiperSlide className="w-[267px]" key={index}>
            <Link href="/detailartikel">
              <img src={data.img} alt="" />
              <h5 className="text-[#484C57] leading-[25px] mt-[15px]">
                {data.title}
              </h5>
            </Link>

            <div className="flex gap-[13px]">
              <img
                className="w-[20px] h-[20px]"
                src="./static/images/icons/calendar.png"
                alt=""
              />
              <p className="text-[#626687] text-[14px] leading-[21px] ">
                12 Desember 1212
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
