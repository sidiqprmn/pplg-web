import Buttons from 'components/Button/Buttons'
import Cards from 'components/Card/Card'
import Options from 'components/Option/Options'
import Search from 'components/Search/Search'
import SimpleHeader from 'components/SimpleHeader/SimpleHeader'
import artikelData from 'data/artikelData'
import React, { useEffect, useState } from 'react'

function Kegiatan() {
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

  // this code for feature load more
  const [visibleItems, setVisibleItems] = useState<number>(5)

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5)
  }
  const desktopBgImage = './static/images/backgrounds/kegiatan.png'
  const mobileBgImage = './static/images/backgrounds/mobile-bg-header.png'
  return (
    <div>
      <SimpleHeader
        bgImageDesktop={desktopBgImage}
        bgImageMobile={mobileBgImage}
        title="KEGIATAN"
      />
      <div className="flex flex-col items-center gap-y-6 mt-[120px] md:mt-0">
        <div className="w-[962px] flex flex-col gap-y-6 md:w-auto">
          <div className="flex justify-between md:w-full md:mt-[40px]">
            {windowWidth > 767 && (
              <h1 className="text-[#484C57] text-[32px] font-semibold leading-[48px]">
                Kegiatan Terbaru
              </h1>
            )}
            <div className="flex gap-6 md:w-full md:flex-col md:justify-center gap-x-[20px]">
              <Search className="rounded-lg md:rounded-[9px]" placeholder="Cari Kegiatan" />
              <Options.MonthOption />
              <Options.YearOption />
            </div>
          </div>
          {artikelData.slice(0, visibleItems).map((data) => (
            <Cards.CardArtikel
              img={data.img}
              title={data.title}
              date={data.date}
              text={data.text}
            />
          ))}
          <Buttons.ButtonLoadMore
            className="text-[#204D84]"
            loadMore={loadMoreItems}
          />
        </div>
      </div>
    </div>
  )
}

export default Kegiatan
