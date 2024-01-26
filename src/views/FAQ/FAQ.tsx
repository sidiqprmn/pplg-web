import { Button, Collapse } from 'antd'
import classNames from 'classnames'
import SimpleHeader from 'components/SimpleHeader/SimpleHeader'
import Link from 'next/link'
// import Link from 'next/link'
import style from './FAQ.module.scss'
import React, { useEffect, useState } from 'react'
import Buttons from 'components/Button/Buttons'
import Search from 'components/Search/Search'

const dummyData = [
  {
    title: 'Cara Pemerintah Mengatur Standar Ukuran Tanah/KavlingBangunan ?',
    test: 'faq 1',
  },
  {
    title: 'Cara Pemerintah Mengatur Standar Ukuran Tanah/KavlingBangunan ?',
    test: 'faq 2',
  },
  {
    title: 'Cara Pemerintah Mengatur Standar Ukuran Tanah/KavlingBangunan ?',
    test: 'faq 3',
  },
  {
    title: 'Cara Pemerintah Mengatur Standar Ukuran Tanah/KavlingBangunan ?',
  },
  {
    title: 'Cara Pemerintah Mengatur Standar Ukuran Tanah/KavlingBangunan ?',
  },
  {
    title: 'Cara Pemerintah Mengatur Standar Ukuran Tanah/KavlingBangunan ?',
  },
  {
    title: 'Cara Pemerintah Mengatur Standar Ukuran Tanah/KavlingBangunan ?',
  },
  {
    title: 'Cara Pemerintah Mengatur Standar Ukuran Tanah/KavlingBangunan ?',
  },
  {
    title: 'Cara Pemerintah Mengatur Standar Ukuran Tanah/KavlingBangunan ?',
  },
  {
    title: 'Cara Pemerintah Mengatur Standar Ukuran Tanah/KavlingBangunan ?',
  },
  {
    title: 'Cara Pemerintah Mengatur Standar Ukuran Tanah/KavlingBangunan ?',
  },
  {
    title: 'Cara Pemerintah Mengatur Standar Ukuran Tanah/KavlingBangunan ?',
  },
  {
    title: 'Cara Pemerintah Mengatur Standar Ukuran Tanah/KavlingBangunan ?',
  },
]

function FAQ() {
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

  const [visibleItems, setVisibleItems] = useState<number>(10)

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 10)
  }

  // this function for hidden answer or show answer
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleText = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null)
    } else {
      setExpandedIndex(index)
    }
  }
  const desktopBgImage = './static/images/backgrounds/faq.png'
  const mobileBgImage = './static/images/backgrounds/mobile-bg-header.png'
  return (
    <div>
      <SimpleHeader
        bgImageDesktop={desktopBgImage}
        bgImageMobile={mobileBgImage}
        title="FAQ"
      />
      <div className="relative">
        <img
          className="absolute top-[80px] hidden-dots"
          src="./static/images/icons/dots.svg"
          alt=""
        />
        <img
          className="absolute right-0 top-[500px] hidden-dots"
          src="./static/images/icons/dots.svg"
          alt=""
        />
        <div className="w-[962px] mt-[80px] flex justify-between m-auto md:w-full md:mt-[32px]">
          <h1 className="text-[#484C57] text-[32px] font-semibold leading-[48px] w-[400px] text-center md:text-[24px] md:leading-[36px] md:w-[213px] md:mx-auto md:mb-[32px]">
            Pertanyaan Yang Sering Diajukan Masyarakat
          </h1>

          <div className="mt-12">
            <Search
              className="rounded-lg w-[389px] md:hidden"
              placeholder="Cari Pertanyaan"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-5 gap-y-3 md:mt-0">
          {dummyData.slice(0, visibleItems).map((data, index) => (
            <Collapse
              key={index}
              className="w-[962px] bg-[#FFFFFF] border-none shadow-[0_10px_60px_0px_rgba(32,77,132,0.1)] relative md:w-[335px]"
              items={[
                {
                  key: '1',
                  label: (
                    <h5 className="text-[20px] font-bold md:text-[14px] md:leading-[21px] md:font-[600] font-[Quicksand,sans-serif]">
                      {data.title}
                    </h5>
                  ),
                  children: (
                    <div className="font-[Quicksand,sans-serif]">
                      <div className="w-[8.04px] h-full absolute bg-[#FCB717] top-0 left-0 rounded-l-[8px]" />
                      <h5 className="text-[#484C57] leading-[24px] md:text-[12px] md:font-[300] md:leading-[18px]">
                        Bagaimana cara pemerintah mengatur standar ukuran
                        tanah/kavling bangunan mengingat bahwa setiap daerah
                        memiliki karakteristik lokasi yang berbeda-beda dan
                        ketersediaan ruang yang berbeda pula?
                      </h5>
                      <span className="text-[#216BD6] text-[14px] font-[400] leading-[21px]">
                        Jawabannya
                      </span>
                      <p
                        className={`text-[#626687] leading-[24px] font-[300] mt-[12px] overflow-hidden md:text-[14px] md:leading-[18px] ${
                          expandedIndex === index ? 'h-auto' : 'h-[70px] md:h-0'
                        }`}
                      >
                        Pengaturan standar ukuran tanah dan kavling bangunan
                        secara lebih teknis dilakukan pemerintah daerah melalui
                        RTRW dan RDTR. Dalam hal ini keputusan menteri dibuat
                        untuk menilai standar hunian yang layak huni berdasarkan
                        luasan kebutuhan ruang per orang, sedangkan KDB dan KLB
                        menjadi wewenang aturan peme¬rintah daerah Pengaturan
                        standar ukuran tanah dan kavling bangunan secara lebih
                        teknis dilakukan pemerintah daerah melalui RTRW dan
                        RDTR. Dalam hal ini keputusan menteri dibuat untuk
                        menilai standar hunian yang layak huni berdasarkan
                        luasan kebutuhan ruang per orang, sedangkan KDB dan KLB
                        menjadi wewenang aturan peme¬rintah daerah. Pemerintah
                        daerah yang seharusnya bisa membuat regulasi aturan
                        kavling/KDB/KLB secara lebih rinci untuk masing-masing
                        kawasan guna menunjang keberlanjutan
                        penghunian.Terimakasih.Salam,
                      </p>
                      <Button
                        className="border-[#204D84] text-[#204D84] text-[14px] w-[207px] h-[33px] flex items-center font-semibold mt-[35px]"
                        onClick={() => toggleText(index)}
                      >
                        {expandedIndex === index
                          ? 'Tampilkan Lebih Sedikit'
                          : 'Tampilkan Selengkapnya'}
                      </Button>
                    </div>
                  ),
                },
              ]}
              expandIconPosition={'end'}
              size={'large'}
              onChange={() => console.log('test')}
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

export default FAQ
