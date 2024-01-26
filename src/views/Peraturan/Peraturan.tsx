import React, { useEffect, useState } from 'react'
import Slider from 'layouts/containers/Public/Slider/index'
import TitlePage from 'components/Title/TitlePage'
import Buttons from 'components/Button/Buttons'
import peraturanData from 'data/peraturanData'
import Berita from 'layouts/containers/Public/Berita/Berita'
import CardPeraturan from 'components/Card/CardPeraturan'
import Search from 'components/Search/Search'
import SimpleHeader from 'components/SimpleHeader/SimpleHeader'

function Peraturan() {
  //this useState for save value width layers
  const [windowWidth, setWindowWidth] = useState<number>(0)

  // get width layers and save
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
  })
  // this code for loadmore fiture
  const [visibleItems, setVisibleItems] = useState<number>(10)

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 10)
  }
  const desktopBgImage = './static/images/backgrounds/peraturan.png'
  const mobileBgImage = './static/images/backgrounds/mobile-bg-header.png'

  return (
    <div>
      <SimpleHeader
        bgImageDesktop={desktopBgImage}
        bgImageMobile={mobileBgImage}
        title="PERATURAN"
      />
      <div className="px-[243px] bg-[#F5F8FA] md:py-0 md:px-5 relative">
        <div className="mt-[80px] flex justify-between m-auto md:w-full md:mt-[40px]">
          {windowWidth > 767 && (
            <h1 className="text-[#484C57] text-[32px] font-semibold leading-[48px] w-[400px]">
              Peraturan Terbaru
            </h1>
          )}
          <div>
            <Search
              className="rounded-lg w-[389px]"
              placeholder="Cari Peraturan"
            />
          </div>
        </div>
        <div className="flex mt-5 flex-col gap-y-6 md:mt-8">
          {peraturanData.slice(0, visibleItems).map((data) => (
            <CardPeraturan
              title={data.title}
              downloaded={data.downloaded}
              pdfUrl={data.pdfUrl}
            />
          ))}
          <Buttons.ButtonLoadMore
            className="text-[#204D84]"
            loadMore={loadMoreItems}
          />
        </div>
      </div>
      <div className="bg-[#FFFFFF] pt-10">
        {windowWidth >= 767 ? (
          <Slider
            title="Artikel Terbaru"
            container="px-[147px] py-[80px]"
            swiperStyle="pb-[30px] pt-[70px]"
          />
        ) : (
          <Berita title="Berita Terbaru" />
        )}
      </div>
    </div>
  )
}

export default Peraturan
