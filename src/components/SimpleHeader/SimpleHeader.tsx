import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs'
import style from './SimpleHeader.module.scss'

interface IHeader {
  title: string
}
interface ISimpleHeaderProps extends IHeader {
  bgImageDesktop: string
  bgImageMobile: string
}
function SimpleHeader(props: ISimpleHeaderProps) {
  const { bgImageDesktop, bgImageMobile, title } = props

  const router = useRouter()
  const { pathname } = router

  const [namePage, setNamePage] = useState('')

  // this useState for save value width layers
  const [windowWidth, setWindowWidth] = useState<number>(0)

  // get width layers and save
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    // this condition for set name on bread crumb
    switch (pathname) {
      case '/tentang':
        setNamePage('Tentang')
        break
      case '/alurlayanan':
        setNamePage('Alur Layanan')
        break
      case '/artikel':
        setNamePage('Artikel')
        break
      case '/kegiatan':
        setNamePage('Kegiatan')
        break
      case '/peraturan':
        setNamePage('Peraturan')
        break
      case '/desainrumah':
        setNamePage('Desain Rumah')
        break
      case '/buku':
        setNamePage('Buku')
        break
      case '/video':
        setNamePage('Video')
        break
      case '/survey':
        setNamePage('Survei Kepuasan Publik')
        break

      default:
        break
    }
  })

  // get image for styling background image
  const bgImage = {
    backgroundImage: `url('${
      windowWidth >= 767 ? bgImageDesktop : bgImageMobile
    }')`,
  }

  return (
    <div>
      <div
        className={classNames(
          'flex flex-col justify-center items-center md:h-[157px] md:bg-cover md:bg-no-repeat',
          style['hero-section'],
        )}
        // validation image for mobile or desktop
        style={bgImage}
      >
        <div className="z-[1] text-center text-white">
          {pathname === '/buatpertanyaan' ? (
            <div>
              <BreadCrumbs
                namePage={
                  pathname === '/buatpertanyaan' ? 'Buat Pertanyaan' : namePage
                }
                colorNameTwo="text-[#FDC535]"
                colorNameOne="text-white"
                icon="text-white"
                position="top-[40px] left-[140px] z-10 gap-2 md:top-[16px] md:left-[20px] md:hidden"
              />
              <h1 className="font-semibold text-[46px] leading-[61px] relative inline-block text-center md:text-[28px] md:leading-[41px]">
                Buat Pertanyaan <br /> Klinik Rumah Swadaya
              </h1>
              <p className="font-[400] leading-[24px] -mt-2 md:text-[12px] md:leading-[18px] md:w-[280px] mx-auto">
                Lengkapi formulir berikut untuk mengajukan pertanyaan Anda
              </p>
            </div>
          ) : (
            <h1 className="font-bold text-[52px] w-[743px] md:w-[362px] md:mt-3 relative inline-block text-center md:text-[28px]">
              {title}
            </h1>
          )}
        </div>
        {pathname !== '/buatpertanyaan' && (
          <BreadCrumbs
            namePage={
              pathname === '/buatpertanyaan'
                ? 'Buat Pertanyaan'
                : pathname === '/faq'
                ? 'FAQ'
                : namePage
            }
            colorNameTwo="text-[#FDC535]"
            colorNameOne="text-white"
            icon="text-white"
            position="top-[40px] left-[140px] z-10 gap-2 md:top-[16px] md:left-[20px]"
          />
        )}
      </div>
    </div>
  )
}

export default SimpleHeader
