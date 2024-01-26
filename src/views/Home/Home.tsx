// import { Button, Typography, Popover } from 'antd'
import classNames from 'classnames'
// import Link from 'next/link'
import HomeHeader from 'components/HomeHeader/HomeHeader'
// import CardHome from 'components/Card/CardHome'
import Footer from 'layouts/containers/Public/Footer'
// import SliderHome from 'components/HomeHeader/Slider'

import Slider from 'layouts/containers/Public/Slider/index'
import Cards from 'components/Card/Card'
import HomeMap from 'components/Map'
import React from 'react'
import HomeService from 'components/HomeService/HomeService'
import styles from './Home.module.scss'
import SocialMedia from './partials/SocialMedia'
import Link from 'next/link'
import Saran from 'components/Saran/Saran'

function Home() {
  return (
    <div className="md:w-full bg-white">
      <HomeHeader />
      <div className="relative">
        <Slider container="px-[30px]" swiperStyle="py-[50px] relative" />
      </div>

      <div
        className={classNames(
          'bg-white-100 flex-col justify-center items-center md:w-full',
          styles['home-page'],
        )}
      >
        <div className="relative mt-[-40px]">
          <img
            className="absolute top-0 z-[2] md:hidden"
            src="./static/images/icons/dots.svg "
            alt=""
          />
          <img
            className="absolute right-0 top-[320px] z-[2] md:hidden"
            src="./static/images/icons/dots.svg"
            alt=""
          />
          <span className="bg-[#FFF8E7] rounded-full  px-7 py-3 font-semibold text-[24px] md:text-[16px] text-[#FFB800] mt-[-10px] ">
            Materi di
          </span>
          <h1 className="text-[#14437C] text-[44px] leading-[66px] font-bold mb-4 mt-4 md:text-[20px]">
            Jurusan PPLG MUPAT
          </h1>
          {/* <CardHome /> */}
          <div className="flex gap-[30px] justify-center mt-16 md:flex-col md:w-[full] md:items-center">
            <Cards.CardHome
              img="./static/images/vectors/informasi.svg"
              title="Exploring Web Development"
              contentModal="Discover the world of web development, covering fundamental concepts to the latest technologies. Our platform provides information on habitable homes, including planning, construction, and maintenance."
            />
            <Cards.CardHome
              img="./static/images/vectors/konsultasi.svg"
              title="Gaming Development Insights"
              contentModal="Get specialized consultation on game development. This service helps answer questions or provide solutions related to gaming issues you may encounter."
            />
            <Cards.CardHome
              img="./static/images/vectors/bantuan-teknis.svg"
              title="Graphic Design Learning Hub"
              contentModal="Explore practical and informative graphic design learning resources. Technical assistance is also available to support planning and implementation of simple home construction, providing technical input on material usage."
            />
          </div>
        </div>
      </div>
      <div
        className={classNames(
          'bg-white-100 justify-center items-center md:w-[full]',
          styles['home-map'],
        )}
      >
        {/* <HomeMap /> */}
      </div>
      {/* codingan fitur chat */}
      {/* <div style={{ width: buttonWidth, marginLeft: buttonWidth * 12 + 24 }}>
        <Popover
          placement="rightBottom"
          title={text}
          content={content}
          trigger="click"
        >
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./static/images/logo/chat.png"
          />
        </Popover>
      </div> */}

      {/* <div
        className={classNames(
          'bg-gray-100 min-h-screen flex-col justify-center items-center',
          styles['home-page'],
        )}
      >
        <div className="" />
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website!</h1>
        <p className="text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="text-lg mb-8">
          {process.env.NEXT_PUBLIC_FRONTEND_URL || ''}
        </p>
        <p className="text-lg mb-8">
          {process.env.NEXT_PUBLIC_BACKEND_URL || ''}
        </p>
        <Link href="/admin">
          <Button>Go to Admin</Button>
        </Link>
      </div> */}
      <div className="bg-[#032248] px-[140px] py-16 flex gap-[160px] border-b-slate-50 md:w-[full] md:flex-col md:gap-[20px] md:justify-start md:items-start md:px-0 md:pl-[20px]">
        <div className="md:w-full md:mt-5">
          <img
            src="./static/images/logo/logo-djp-white.svg"
            alt=""
            className="md:pr-[58px]"
          />
          <div className="w-[238px] mt-[40px]">
            <p className="text-[14px] text-[#3C6290] leading-[21px]">Alamat</p>
            <p className="text-[#FFFFFF] text-[14px] leading-[21px]">
              Jl. Pattimura No. 20 Gedung G, Kebayoran Baru, Jakarta Selatan,
              12110
            </p>
          </div>
          <table className="text-white text-[14px] leading-[21px] mt-[23px]">
            <tbody>
              <tr>
                <td>Telepon</td>
                <td className="px-2">:</td>
                <td>(021) 73397727</td>
              </tr>
              <tr>
                <td>Fax</td>
                <td className="px-2">:</td>
                <td>(021) 73397727</td>
              </tr>
              <tr>
                <td>Email</td>
                <td className="px-2">:</td>
                <td>perumahan@pu.go.id</td>
              </tr>
            </tbody>
          </table>
          <div className="flex gap-4 justify-start items-center mt-6 ">
            <SocialMedia.Youtube />
            <SocialMedia.Instagram />
          </div>
        </div>
        <div className="md:w-full">
          <p className="text-[14px] text-[#3C6290] leading-[21px] md:mt-6">
            Tautan Terkait
          </p>
          <div className="flex items-center gap-x-[12px] -mt-3">
            <img
              className="w-[20px h-[15px]"
              src="./static/images/icons/chevron-right-white.svg"
              alt=""
            />
            <Link
              href="https://pu.go.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className=" text-white text-[14px] mt-4">Kementerian PUPR</p>
            </Link>
          </div>
          <div className="flex items-center gap-x-[12px] -mt-3">
            <img
              className="w-[20px h-[15px]"
              src="./static/images/icons/chevron-right-white.svg"
              alt=""
            />{' '}
            <Link
              href="https://perumahan.pu.go.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className=" text-white text-[14px] mt-4">
                Direktorat Jenderal Perumahan
              </p>
            </Link>
          </div>
          <p className="text-[14px] text-[#3C6290] leading-[21px] mt-[35px]">
            Total Kunjugan
          </p>
          <p className="text-[#FFFFFF] text-[14px] leading-[21px]">00000423</p>
          <Saran />
        </div>
      </div>
      <HomeService />
    </div>
  )
}

export default Home
