import Buttons from 'components/Button/Buttons'
import beritaData from 'data/beritaData'
import React, { useState } from 'react'

interface ITitle {
  title:string
}

function Berita(props: ITitle) {
  const {title} = props

  const [visibleItems, setVisibleItems] = useState<number>(5)

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5)
  }
  return (
    <div className="w-full px-5">
      <h3 className="text-[24px] text-[#484C57] leading-[36px] font-semibold ">
        {title}
      </h3>
      <div className="flex relative">
        <input
          className="w-full h-[45px] border-[#D9D9D9] border px-[16px] rounded-full"
          type="text"
          placeholder="Search"
        />
        <img
          className="w-[20px] h-[20px] absolute top-3 right-5"
          src="./static/images/icons/search.png"
          alt=""
        />
      </div>

      {beritaData.slice(0, visibleItems).map((data) => (
        <div className="mt-[32px]">
          <img className="w-full" src={data.img} alt="" />
          <h5 className="text-[#484C57] leading-[31px] mt-[16px]">
            {data.title}
          </h5>
          <div className="flex gap-[13px]">
            <img
              className="w-[20px] h-[20px]"
              src="./static/images/icons/calendar.png"
              alt=""
            />
            <p className="text-[#626687] text-[17px] leading-[26px] font-[400]">
              29 Mei 2023
            </p>
          </div>
        </div>
      ))}
      <Buttons.ButtonLoadMore loadMore={loadMoreItems} />
    </div>
  )
}

export default Berita
