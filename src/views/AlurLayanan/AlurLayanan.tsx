import React, { useEffect, useState } from 'react'
import SimpleHeader from 'components/SimpleHeader/SimpleHeader'
import Cards from 'components/Card/Card'
import Flow from './partials/Flow'
import Explanation from './partials/Explanation'

function AlurLayanan() {
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
  const desktopBgImage = './static/images/backgrounds/alur-layanan.png'
  const mobileBgImage = './static/images/backgrounds/mobile-bg-header.png'

  return (
    <div className="bg-[#F5F8FA]">
      <SimpleHeader
        bgImageDesktop={desktopBgImage}
        bgImageMobile={mobileBgImage}
        title="ALUR LAYANAN KLINIK RUMAH SWADAYA"
      />
      <div className="px-[140px] py-[120px] md:p-0 ">
        <div className="bg-[#fff] md:hidden w-[1160px] mb-[60px] py-[80px] rounded-[20px] md:w-auto m-auto">
          <h1 className="text-[#484C57] text-[28px] mb-[67px] font-bold leading-[42px] text-center">
            Layanan melalui situs KRS
          </h1>
          <img
            src="./static/images/vectors/dotted.svg"
            className="-z-10 m-auto mr-[53px]"
            alt=""
          />
          <div className="justify-center mt-[-357px]">
            <div className="flex justify-center gap-[18px] mr-[110px]">
              <div>
                <Flow
                  number="01"
                  icon="./static/images/icons/alurlayanan/daftar.svg"
                />
                <br />
                <Explanation
                  title="Daftar"
                  desc="Lakukan Pendaftaran atau LOGIN jika sudah memiliki akun."
                />
              </div>
              <img
                className="mt-[-160px]"
                src="./static/images/vectors/arrow.svg"
                alt=""
                srcSet=""
              />
              <div>
                <Flow
                  number="02"
                  icon="./static/images/icons/alurlayanan/ajukan-pertanyaan.svg"
                />
                <br />
                <Explanation
                  title="Ajukan Pertanyaan Anda"
                  desc="Mengisi data diri dan tujuan kunjungan di buku tamu"
                />
              </div>
              <img
                className="mt-[-160px]"
                src="./static/images/vectors/arrow.svg"
                alt=""
                srcSet=""
              />
              <div>
                <Flow
                  number="03"
                  icon="./static/images/icons/alurlayanan/proses-pertanyaan.svg"
                />
                <br />{' '}
                <Explanation
                  title="Pertanyaan Anda akan diproses"
                  desc="Bertemu dengan Petugas Klinik Rumah Swadaya dan lakukan konsultasi"
                />
              </div>
            </div>

            <div className="flex justify-center gap-[13px] mt-16 mr-[26px]">
              <div>
                <Flow
                  number="05"
                  icon="./static/images/icons/alurlayanan/rating-ulasan.svg"
                />{' '}
                <br />
                <Explanation
                  title="Berikan Rating & Ulasan"
                  desc="Bertemu dengan Petugas Klinik Rumah Swadaya dan lakukan konsultasi"
                />
              </div>
              <img
                className="mt-[-153px] transform rotate-180"
                src="./static/images/vectors/arrow.svg"
                alt=""
                srcSet=""
              />
              <div>
                <Flow
                  number="04"
                  icon="./static/images/icons/alurlayanan/simpan-jawaban.svg"
                />{' '}
                <br />
                <Explanation
                  title="Jawaban Anda akan disimpan"
                  desc="Berikan ulasan terkait layanan di situs KRS"
                />
              </div>
              <img
                className="mt-[-136px] mr-[-100px] pr-28"
                src="./static/images/vectors/arrow.svg"
                alt=""
                srcSet=""
                style={{ transform: 'rotate(169deg)' }}
              />
            </div>
          </div>
        </div>
        <div className="bg-[#fff] md:hidden w-[1160px] py-[80px] rounded-[20px] m-auto md:w-auto">
          <h1 className="text-[#484C57] text-[28px] mb-[65px] font-bold leading-[42px] text-center">
            Layanan di lokasi Balai Pelaksana <br /> Penyediaan Perumahan (BP2P)
          </h1>
          <img
            src="./static/images/vectors/dotted-2.svg"
            className="-z-10 m-auto"
            alt=""
          />
          <div className="flex gap-[92px] justify-center mt-[-45px]">
            <Flow
              number="01"
              icon="./static/images/icons/alurlayanan/rumah.svg"
            />
            <img
              className="mt-[-30px]"
              src="./static/images/vectors/arrow.svg"
              alt=""
              srcSet=""
            />
            <Flow
              number="02"
              icon="./static/images/icons/alurlayanan/register.svg"
            />
            <img
              className="mt-[-30px]"
              src="./static/images/vectors/arrow.svg"
              alt=""
              srcSet=""
            />
            <Flow
              number="03"
              icon="./static/images/icons/alurlayanan/konsultasi.svg"
            />
            <img
              className="mt-[-30px]"
              src="./static/images/vectors/arrow.svg"
              alt=""
              srcSet=""
            />
            <Flow
              number="04"
              icon="./static/images/icons/alurlayanan/rating-ulasan.svg"
            />
          </div>
          <div className="flex justify-center mt-5">
            <Explanation
              title="Datang ke BP2P"
              desc="Datangi lokasi BP2P pelaksana layanan KRS terdekat."
            />
            <Explanation
              title="Registrasi"
              desc="Mengisi data diri dan tujuan kunjungan di buku tamu"
            />
            <Explanation
              title="Konsultasi di Pojok KRS"
              desc="Bertemu dengan Petugas Klinik Rumah Swadaya dan lakukan konsultasi"
            />
            <Explanation
              title="Berikan Ulasan"
              desc="Berikan ulasan terkait layanan di situs KRS"
            />
          </div>
        </div>
        <div>
          <center>
            <div className="hidden md:block md:gap-y-12 md:m-auto">
              <br />
              <br />
              <Cards.CardAlurLayanan
                img="./static/images/icons/alurlayanan/numbers/1.svg"
                title="Jawaban Anda akan disimpan"
                text="Anda akan mendapatkan jawaban atas pertanyaan Anda melalui Fasilitator dan Tenaga Ahli kami yang sudah berpengalaman"
              />
              <br />
              <br />
              <Cards.CardAlurLayanan
                img="./static/images/icons/alurlayanan/numbers/2.svg"
                title="Jawaban Anda akan disimpan"
                text="Anda akan mendapatkan jawaban atas pertanyaan Anda melalui Fasilitator dan Tenaga Ahli kami yang sudah berpengalaman"
              />
              <br />
              <br />
              <Cards.CardAlurLayanan
                img="./static/images/icons/alurlayanan/numbers/3.svg"
                title="Jawaban Anda akan disimpan"
                text="Anda akan mendapatkan jawaban atas pertanyaan Anda melalui Fasilitator dan Tenaga Ahli kami yang sudah berpengalaman"
              />
              <br />
              <br />
              <Cards.CardAlurLayanan
                img="./static/images/icons/alurlayanan/numbers/4.svg"
                title="Jawaban Anda akan disimpan"
                text="Anda akan mendapatkan jawaban atas pertanyaan Anda melalui Fasilitator dan Tenaga Ahli kami yang sudah berpengalaman"
              />
              <br />
              <br />
              <Cards.CardAlurLayanan
                img="./static/images/icons/alurlayanan/numbers/5.svg"
                title="Jawaban Anda akan disimpan"
                text="Anda akan mendapatkan jawaban atas pertanyaan Anda melalui Fasilitator dan Tenaga Ahli kami yang sudah berpengalaman"
              />
              <br />
              <br />
              <Cards.CardAlurLayanan
                img="./static/images/icons/alurlayanan/numbers/6.svg"
                title="Jawaban Anda akan disimpan"
                text="Anda akan mendapatkan jawaban atas pertanyaan Anda melalui Fasilitator dan Tenaga Ahli kami yang sudah berpengalaman"
              />
            </div>
          </center>
        </div>
      </div>
    </div>
  )
}

export default AlurLayanan
