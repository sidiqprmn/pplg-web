import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

interface TitlePageProps {
  title: string
  subTitle?: string
}

function TitlePage(props: TitlePageProps) {
  const { title,subTitle } = props

  const router = useRouter()
  const { pathname } = router
  const [namePage, setNamePage] = useState('')

  useEffect(() => {
    // this condition for set name on bread crumb
    switch (pathname) {
      case '/peraturan':
        setNamePage('Peraturan')
        break
      case '/buku':
        setNamePage('Buku')
        break
      case '/video':
        setNamePage('Video')
        break
      case '/leaflet':
        setNamePage('Leaflet')
        break
      case '/desainrumah':
        setNamePage('Desain Rumah')
        break

      default:
        break
    }
  })

  return (
    <div className="pt-[80px] md:pt-14">
      {/* Judul halaman */}
      <div className="flex justify-center text-[#626687] text-center font-[400] "></div>
      <BreadCrumbs
        namePage={namePage}
        colorNameTwo="text-[#14437C] font-[500]"
        colorNameOne="text-[#484C57] font-[500]"
        icon="text-[#484C57]"
        position="top-[40px] left-[140px] z-10 gap-2 md:top-0 md:left-0 md:w-full md:bg-white md:border md:px-5 md:pt-[15px]"
      />
      <h1 className="pt-[60px] pb-[60px] mb-0 font-[600] text-center text-5xl text-[#484C57] md:text-[30px] md:text-center md:py-12">
        {title}
      </h1>
      <h3 className="text-[#626687] text-[14px] font-normal text-center -mt-10 mb-[45px] md:hidden">
        {subTitle}
      </h3>
    </div>
  )
}

export default TitlePage
