import Buttons from 'components/Button/Buttons'
import CardLeaflet from 'components/Card/CardLeaflet'
import TitlePage from 'components/Title/TitlePage'
import cardDataLeaflet from 'data/leafletData'
import Berita from 'layouts/containers/Public/Berita/Berita'
import Slider from 'layouts/containers/Public/Slider'
import { useEffect, useState } from 'react'

function Leaflet() {
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
  const [visibleItems, setVisibleItems] = useState<number>(6)

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3)
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
  const LeafletDataRows = splitDataIntoRows(cardDataLeaflet.slice(0, visibleItems), 3)
  return (
    <>
      <div className="relative ">
        {/* title page */}
        <TitlePage title="Leaflet" />
      </div>
      <div className="mx-[110px] md:justify-center md:flex">
        <div className="flex justify-evenly flex-wrap gap-x-px">
          {LeafletDataRows.map((row, index) => (
            <div key={index} className="flex gap-x-5 md:flex-col">
              {row.map((data) => (
                <CardLeaflet
                  leafletImg={data.img}
                  title={data.title}
                  imgUrl={data.imgUrl}
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

export default Leaflet
