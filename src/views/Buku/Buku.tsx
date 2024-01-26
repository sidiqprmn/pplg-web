import Buttons from 'components/Button/Buttons'
import CardBuku from 'components/Card/CardBuku'
import Search from 'components/Search/Search'
import SimpleHeader from 'components/SimpleHeader/SimpleHeader'
import TitlePage from 'components/Title/TitlePage'
import bukuData from 'data/bukuData'
import Berita from 'layouts/containers/Public/Berita/Berita'
import Slider from 'layouts/containers/Public/Slider'
import { useEffect, useState } from 'react'

function Buku() {
  // this useState for save value width layers
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
  const [visibleItems, setVisibleItems] = useState<number>(8)

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4)
  }

  // Split the bukuData into arrays with 4 items each
  const splitDataIntoRows = (data, itemsPerRow) => {
    const rows = []
    for (let i = 0; i < data.length; i += itemsPerRow) {
      rows.push(data.slice(i, i + itemsPerRow))
    }
    return rows
  }
  // Create rows with 4 items each
  const bukuDataRows = splitDataIntoRows(bukuData.slice(0, visibleItems), 4)
  const desktopBgImage = './static/images/backgrounds/buku.png'
  const mobileBgImage = './static/images/backgrounds/mobile-bg-header.png'
  return (
    <>
      <div className="relative ">
        {/* title page */}
        <SimpleHeader
          bgImageDesktop={desktopBgImage}
          bgImageMobile={mobileBgImage}
          title="BUKU"
        />
      </div>
      <div className="mx-[110px] md:justify-center md:flex">
        <div className="mt-[80px] mb-5 flex justify-between m-auto md:w-full md:mt-[40px]">
          {windowWidth > 767 && (
            <h1 className="text-[#484C57] text-[32px] font-semibold leading-[48px] w-[400px]">
              Buku Terbaru
            </h1>
          )}
          <div>
            <Search
              className="rounded-lg w-[389px] md:hidden"
              placeholder="Cari Buku"
            />
          </div>
        </div>
        <div className="flex justify-evenly flex-wrap gap-x-px ">
          {bukuDataRows.map((row, index) => (
            <div key={index} className="flex gap-x-5 md:flex-col">
              {row.map((data) => (
                <CardBuku
                  img={data.image}
                  title={data.title}
                  bukuUrl={data.bukuUrl}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <Buttons.ButtonLoadMore
        className="bg-[#204D84] text-[#fff] md:mt-12 md:mb-[108px]"
        loadMore={loadMoreItems}
      />
      <div className="bg-[#FFFFFF] pt-10">
        {windowWidth >= 767 ? (
          <Slider
            title="Artikel Terbaru"
            container="px-[147px] py-[80px]"
            swiperStyle="pb-[30px] pt-[70px]"
          />
        ) : (
          <Berita title="Artikel Terbaru" />
        )}
      </div>
    </>
  )
}

export default Buku
