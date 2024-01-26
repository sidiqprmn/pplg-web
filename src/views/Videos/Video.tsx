import TitlePage from 'components/Title/TitlePage'
import CompVideo from 'components/Comp-video/CompVideo'
import Slider from 'layouts/containers/Public/Slider/index'
import { useEffect, useState } from 'react'
import Berita from 'layouts/containers/Public/Berita/Berita'
import Buttons from 'components/Button/Buttons'
import videoData from 'data/videoData'
import Search from 'components/Search/Search'
import SimpleHeader from 'components/SimpleHeader/SimpleHeader'

function Video() {
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
  const [visibleItems, setVisibleItems] = useState<number>(6)
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
  const desktopBgImage = './static/images/backgrounds/video.png'
  const mobileBgImage = './static/images/backgrounds/mobile-bg-header.png'
  // Create rows with 4 items each
  const VideoDataRows = splitDataIntoRows(videoData.slice(0, visibleItems), 3)
  return (
    <div className="relative">
      <SimpleHeader
        bgImageDesktop={desktopBgImage}
        bgImageMobile={mobileBgImage}
        title="VIDEO"
      />
      <div className="mx-[110px] md:justify-center md:flex">
        <div className="mt-[80px] mb-5 flex justify-between m-auto md:w-full md:mt-[40px]">
          {windowWidth > 767 && (
            <h1 className="text-[#484C57] text-[32px] font-semibold leading-[48px] w-[400px]">
              Video Terbaru
            </h1>
          )}
          <div>
            <Search
              className="rounded-lg w-[389px] md:hidden"
              placeholder="Cari Video"
            />
          </div>
        </div>
        <div className="flex justify-evenly flex-wrap gap-x-px ">
          {VideoDataRows.map((row, index) => (
            <div key={index} className="flex gap-x-8 md:flex-col">
              {row.map((data) => (
                <CompVideo
                  link={data.videoCard}
                  title={data.title}
                  linkVideo={data.video}
                  key={data.video} // tambahkan key pada komponen yang di-mapping
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
    </div>
  )
}

export default Video
