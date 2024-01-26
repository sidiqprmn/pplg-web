import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs'
import ExplanationArtikel from 'components/ExplanationArtikel/ExplanationArtikel'
import TitleContentArtikel from 'components/Title/TitleContentArtikel'
import TitlePage from 'components/Title/TitlePage'
import { jenisBambu, jenisKayuData, jenisPasir } from 'data/detailArtikelData'
import Berita from 'layouts/containers/Public/Berita/Berita'
import Slider from 'layouts/containers/Public/Slider'
import React, { useEffect, useState } from 'react'

function DetailArtikel() {
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
  return (
    <div className="bg-[#FFFFFF]">
      <BreadCrumbs
        namePage="Artikel"
        colorNameTwo="text-[#484C57] font-[500]"
        colorNameOne="text-[#484C57] font-[500]"
        icon="text-[#484C57]"
        position="top-[120px] left-[140px] z-10 gap-2 md:top-0 md:left-0 md:w-full md:bg-white md:border md:px-5 md:pt-[15px]"
      />
      <div className="-mt-14">
      <TitlePage title="Bahan Material" subTitle="29 Mei 2023" />
      </div>
      <div className="flex justify-evenly mx-16">
        <h3 className="hidden md:block md:text-[#626687] md:text-[12px] md:font-normal md:text-center md:-mt-8 md:mb-[33px] md:px-[16px]">
          29 Mei 2023
        </h3>
        <h3 className="hidden md:block md:text-[#626687] md:text-[12px] md:font-normal md:text-center md:-mt-8 md:mb-[33px] md:border-l-2 md:px-[16px]">
          Kategori: Informasi
        </h3>
      </div>
      <img
        className="mx-auto px-5"
        src="./static/images/content/artikel/example3.png"
        alt=""
      />
      <div className="w-[749px] mx-auto mt-[46px] text-[#484C57] md:w-auto md:px-5">
        <div>
          <TitleContentArtikel TitleContent="1. Bambu" />
          <ExplanationArtikel
            title="Jenis bambu :"
            description="di Indonesia sangat beragam: bambu wuluh, bambu petung, bambu tali, bambu adang, bambu duri, dan lain-lain"
          />
          <ExplanationArtikel
            title="Sifat bambu :"
            description="Bambu sifatnya ringan, lentur, daya tahan sedang, cocok untuk tanah yang bergerak (daerah gempa)"
          />
          <ExplanationArtikel title="Kelebihan Bambu :" />
          <ol className="ms-4" type="a">
            {jenisBambu.map((data) => (
              <li className="list-disc mt-2">{data}</li>
            ))}
          </ol>
        </div>
        <div className="mt-[40px]">
          <TitleContentArtikel TitleContent="2. Kayu" />
          <ExplanationArtikel title="Kelebihan Bambu :" />
          <ul className="ms-4">
            {jenisKayuData.map((data) => (
              <li className="list-disc -mt-3">
                <p>
                  {data.title}
                  <br />
                  {data.jenis}
                </p>{' '}
              </li>
            ))}
          </ul>
          <ExplanationArtikel
            title="Penggunaan Kayu :"
            description="Kayu dapat digunakan sebagai kolom, konstruksi atap, dinding, lantai, maupun ornament dekoratif baik di dalam ruangan maupun diluar ruangan"
          />
        </div>
        <div className="mt-[40px]">
          <TitleContentArtikel TitleContent="3. Pasir" />
          <ExplanationArtikel
            title="Jenis Pasir : "
            description="Pasir beton, pasir pasang, pasir sungai, pasir merah, pasir elod, Fungsi dan penggunaan pasir :"
          />
          <ul className="ms-4">
            {jenisPasir.map((data) => (
              <li className="list-disc mt-4">{data} </li>
            ))}
          </ul>
        </div>
        <div className="mt-[40px]">
          <TitleContentArtikel TitleContent="4. Batu Bata" />
          <ExplanationArtikel
            description="Batu bata yang terbuat dari tanah liat biasanya dikeringkan dengan udara
            atau ditekan dengan tangan"
          />
          <ul className="ms-4">
            {jenisPasir.map((data) => (
              <li className="list-disc mt-4">{data} </li>
            ))}
          </ul>
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

export default DetailArtikel
