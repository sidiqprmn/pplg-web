import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import Link from 'next/link'

function HomeHeader() {
  const [bgStyle, setBgStyle] = useState(
    './static/images/backgrounds/Banner51.png',
  )

  // Fungsi untuk mengubah gambar pada layar md
  const changeImageOnMd = () => {
    if (window.innerWidth <= 768) {
      setBgStyle('./static/images/backgrounds/mobile-bg-main.svg')
    } else {
      setBgStyle('./static/images/backgrounds/coding-bg.jpg')
    }
  }

  useEffect(() => {
    changeImageOnMd()
    window.addEventListener('resize', changeImageOnMd)
    return () => window.removeEventListener('resize', changeImageOnMd)
  }, [])

  return (
    <section
      className="text-indigo-200 body-font py-[135px] ps-[146px] bg-no-repeat bg-cover h-[100vh] md:h-[85vh] md:w-[full] md:py-0 md:pt-[59px] md:pl-[29px] md:px-0"
      style={{ backgroundImage: `url(${bgStyle})` }}
    >
      <div className="md:w-[full] md:h-[670.55px] md:flex md:flex-col md:justify-start md:items-start relative">
        <div className="md:mb-[16px]">
          <h1 className=" md:inline md:text-[44px] md:mb-2 text-[#FDC535] text-[92px] font-[Rapihaf]">
            PPLG <br />{' '}
            <span className="md:text-[44px] text-[92px] text-[#fff] font-[Rapihaf]">
              SMK MUPAT
            </span>
          </h1>
        </div>
        <h5 className="font-bold text-[32px] text-[#FFFFFF] md:text-[18px]">
          Pengembangan Perangkat Lunak dan Gim!
        </h5>
        <p className="text-[18px] text-[#FFFFFF] md:text-[12px]">
          Menciptakan Siswa dengan SDM dan adab yang unggul
        </p>
        <Link href="/buatpertanyaan">
          <Button className="bg-[#FDC535] w-[212px]  h-[54px] md:px-[24px] md:py-[10px] border-[#FDC535] flex justify-center items-center gap-[8px] font-semibold text-[#204D84] mt-[50px] md:mt-[30px] shadow-[-10px_16px_30px_0px_rgba(7,17,48,1)]">
            Daftar Sekarang
            <img src="./static/images/icons/arrow-right-blue.png" alt="" />
          </Button>
        </Link>
        {/* <div className="hidden sm:ml-[1rem] sm:bottom-[-10rem] xl:py-8 2xl:h-[640px] sm:flex">
          <img
            src="./static/images/favicon-new.png"
            alt="Avatar"
            style={{ width: '270px', height: '270px' }}
          />
        </div>
        <div className="sm:hidden xl:hidden mt-[-430px] ml-[580px] flex justify-center">
          <img
            src="./static/images/favicon.svg"
            alt="sdsddsd"
            style={{ width: '470px', height: '470px' }}
          />
        </div> */}
      </div>
    </section>
  )
}

export default HomeHeader
