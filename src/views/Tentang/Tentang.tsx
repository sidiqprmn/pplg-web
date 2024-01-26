import React from 'react'
import SimpleHeader from 'components/SimpleHeader/SimpleHeader'
import CriteriaCard from './partials/CriteriaCard'
import PrincipleCard from './partials/PrincipleCard'

const contentChecklist: string[] = [
  'Mengukur tingkat kebutuhan masyarakat terhadap layanan rumah layak huni',
  'Memberikan layanan bantuan teknis kepada masyarakat',
  'Meningkatkan keswadayaan masyarakat dalam pemenuhan rumah layak huni',
  'Memberikan layanan informasi rumah layak huni',
]

const contentList = [
  {
    img: './static/images/icons/Tentang/icon1.png',
    text: 'Masyarakat yang menerima bantuan stimulan pembangunan/perbaikan rumah',
  },
  {
    img: './static/images/icons/Tentang/icon2.png',
    text: 'Masyarakat yang ingin membangun/memperbaiki rumah',
  },
  {
    img: './static/images/icons/Tentang/icon3.png',
    text: 'Masyarakat umum',
  },
]
const desktopBgImage = './static/images/backgrounds/tentang.png'
const mobileBgImage = './static/images/backgrounds/mobile-bg-header.png'

function Tentang() {
  return (
    <div>
      {/* hero section */}
      <SimpleHeader
        bgImageDesktop={desktopBgImage}
        bgImageMobile={mobileBgImage}
        title="TENTANG"
      />
      {/* content */}
      <div className="realtive">
        <img
          className="absolute top-[550px] hidden-dots"
          src="./static/images/icons/dots.svg"
          alt=""
        />
        <img
          className="absolute right-0 top-[380px] hidden-dots"
          src="./static/images/icons/dots.svg"
          alt=""
        />
        <div className="px-[100px] py-[150px] md:px-[20px] md:py-[30px]">
          <section className="flex justify-center gap-[93px] md:flex-col-reverse">
            <div className="w-[482px] md:w-[324.01px]">
              <img src="./static/images/vectors/vector-tentang.svg" alt="" />
            </div>
            <div className="w-[564px] md:w-auto">
              <h1 className="text-[#484C57] text-[44px] font-bold leading-[66px] md:text-[24px] md:leading-[36px]">
                Klinik Rumah Swadaya (KRS)
              </h1>
              <p className=" text-[#626687] mb-[40px] md:text-[16px] md:leading-[25px]">
                Klinik Rumah Swadaya (KRS) merupakan kegiatan pemberian layanan
                informasi dan bantuan teknis kepada masyarakat secara individu
                atau kelompok untuk meningkatkan keswadayaan masyarakat dalam
                pemenuhan rumah layak huni dengan tujuan sebagai berikut:
              </p>
              <div className="flex flex-wrap gap-x-[50px] gap-y-[25px] ">
                {/*  */}
                {contentChecklist.slice(0, 4).map((data) => (
                  <div className="flex w-[254px]" key={data}>
                    <img
                      className="w-[22px] h-[22px]"
                      src="./static/images/icons/Tentang/checklist.svg"
                      alt=""
                    />
                    <p className="text-[#626687] ms-3 text-[14px]">{data}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="h-[508px] rounded-[40px] w-[1160px] bg-[#204D84] mt-20 m-auto relative  md:w-[335px] md:rounded-[20px] md:h-auto">
            <div className="flex md:flex-col ">
              <img
                className="absolute -bottom-10 -left-8 -z-10 sm:hidden"
                src="./static/images/icons/dots-lg.svg"
                alt=""
              />
              <div className="ps-[70px] py-20 w-[50%] md:w-full md:ps-[15px] md:pt-[32px] pb-0">
                <h1 className="font-bold text-white text-[35px] md:text-[24px] leading-[36px]">
                  <span className="text-[#FDC535]">KRS</span> Untuk Siapa Saja
                </h1>
                {contentList.map((data) => (
                  <div
                    key={data.img}
                    className="flex mt-5 items-center w-[403px] gap-[18px] md:w-[289px] md:mt-[24px] gap-x-[24px]"
                  >
                    <img
                      className="w-[54px] h-[54px] md:w-[40px] md:h-[40px]"
                      src={data.img}
                      alt=""
                    />
                    <p className="text-white mt-3 md:text-[14px] md:font-[400] md:mt-0 md:leading-[24px]">
                      {data.text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="w-[50%] md:w-full">
                <img
                  className="w-[594px] mt-3 md:w-[281px] md:mt-0 md:ms-auto"
                  src="./static/images/vectors/house.svg"
                  alt=""
                />
              </div>
            </div>
          </section>
          <section className="mt-[130px] mx-10 flex sm:mx-0 sm:flex-col justify-between">
            <div className="w-[573px] sm:w-full text-[#484C57]">
              <h1 className="font-bold text-[44px] sm:text-[30px] sm:leading-9 leading-[66px]">
                TENTANG RUMAH LAYAK HUNI
              </h1>
              <p className="leading-[28px] sm:leading-6 sm:text-[15px]">
                <span className="font-bold">Rumah Layak Huni</span> adalah rumah
                yang memenuhi persyaratan keselamatan bangunan dan kecukupan
                minimum luas bangunan serta kesehatan penghuni. (UU 1 tahun 2011
                tentang Perumahan dan Kawasan Permukiman Pasal 24 huruf A).{' '}
                <br /> Dalam perkembangan pembangunan perumahan yang
                berkelanjutan, perlu diterapkan juga prinsip kelestarian
                lingkungan dan konsep bangunan gedung hijau, yakni konservasi
                air, konservasi energi, dan penurunan emisi karbon melalui
                efisiensi material.
              </p>
            </div>
            <img
              className="sm:my-10"
              src="./static/images/vectors/home.svg"
              alt=""
            />
          </section>
        </div>
        <section className="bg-[#204D84] px-[100px] sm:px-4 py-[80px] relative">
          <img
            className="absolute right-0 top-3x sm:hidden"
            src="./static/images/icons/dots-2.svg"
            alt=""
          />
          <h1 className="text-[32px] sm:text-[18px] text-[#FFFFFF] font-normal ml-10 sm:ml-0">
            <span className="text-[44px] sm:text-[28px] text-[#FFC928] font-bold">
              Kriteria Rumah Layak Huni
            </span>
            <br /> Menurut Sustainable Development Goals (SDGs)
          </h1>
          <div className="mt-[70px] ml-10 grid sm:ml-0 grid-cols-3 gap-[110px] sm:gap-10 sm:grid-cols-1">
            <CriteriaCard
              image="./static/images/icons/Tentang/icon4.svg"
              title="Ketahanan Bangunan"
            >
              <div className="flex w-[254px]">
                <img
                  className="w-[22px] h-[22px]"
                  src="./static/images/icons/Tentang/checklist.svg"
                  alt=""
                />
                <p className="text-white ms-3 text-[14px] sm:text-[16px]">
                  Komponen struktur dan non struktur{' '}
                  <span className="font-bold">memenuhi kaidah konstruksi</span>
                </p>
              </div>
              <div className="flex w-[254px]">
                <img
                  className="w-[22px] h-[22px]"
                  src="./static/images/icons/Tentang/checklist.svg"
                  alt=""
                />
                <p className="text-white ms-3 text-[14px] sm:text-[16px]">
                  Menggunakan bahan bangunan{' '}
                  <span className="font-bold">ber-SNI</span>
                </p>
              </div>
            </CriteriaCard>
            <CriteriaCard
              image="./static/images/icons/Tentang/icon5.svg"
              title="Luas Bangunan"
            >
              <div className="flex w-[270px]">
                <img
                  className="w-[22px] h-[22px]"
                  src="./static/images/icons/Tentang/checklist.svg"
                  alt=""
                />
                <p className="text-white ms-3 text-[14px] sm:text-[16px]">
                  Luas lantai per kapita per orang: 7,2 m2
                </p>
              </div>
              <div className="flex w-[287px]">
                <img
                  className="w-[22px] h-[22px]"
                  src="./static/images/icons/Tentang/checklist.svg"
                  alt=""
                />
                <p className="text-white ms-3 text-[14px] sm:text-[16px]">
                  Jika ada 5 penghuni, maka luas rumah: 5 x 7,2 = 36 m2
                </p>
              </div>
            </CriteriaCard>
            <CriteriaCard
              image="./static/images/icons/Tentang/icon6.svg"
              title="Sanitasi"
            >
              <div className="flex w-[254px]">
                <img
                  className="w-[22px] h-[22px]"
                  src="./static/images/icons/Tentang/checklist.svg"
                  alt=""
                />
                <p className="text-white ms-3 text-[14px] sm:text-[16px]">
                  Tersedia di setiap rumah kloset dengan{' '}
                  <span className="font-bold">leher angsa</span>
                </p>
              </div>
              <div className="flex w-[254px]">
                <img
                  className="w-[22px] h-[22px]"
                  src="./static/images/icons/Tentang/checklist.svg"
                  alt=""
                />
                <p className="text-white ms-3 text-[14px] sm:text-[16px]">
                  Dapat tersambung ke SPAL/ septic tank yang disedot min. 5
                  tahun sekali
                </p>
              </div>
            </CriteriaCard>
            <CriteriaCard
              image="./static/images/icons/Tentang/icon7.svg"
              title="Air Minum"
            >
              <div className="flex w-[300px]">
                <img
                  className="w-[22px] h-[22px]"
                  src="./static/images/icons/Tentang/checklist.svg"
                  alt=""
                />
                <p className="text-white ms-3 text-[14px] sm:text-[16px]">
                  Tidak berasa, tidak berbau, tidak berwarna
                </p>
              </div>
              <div className="flex w-[300px]">
                <img
                  className="w-[22px] h-[22px]"
                  src="./static/images/icons/Tentang/checklist.svg"
                  alt=""
                />
                <p className="text-white ms-3 text-[14px] sm:text-[16px]">
                  Tersedia min. 12 jam sehari
                </p>
              </div>
              <div className="flex w-[300px]">
                <img
                  className="w-[22px] h-[22px]"
                  src="./static/images/icons/Tentang/checklist.svg"
                  alt=""
                />
                <p className="text-white ms-3 text-[14px] sm:text-[16px]">
                  Jarak jangkau maksimal 30 menit
                </p>
              </div>
              <div className="flex w-[300px]">
                <img
                  className="w-[22px] h-[22px]"
                  src="./static/images/icons/Tentang/checklist.svg"
                  alt=""
                />
                <p className="text-white ms-3 text-[14px] sm:text-[16px]">
                  Tidak mengandung mikroorganisme dan logam berat
                </p>
              </div>
            </CriteriaCard>
            <CriteriaCard
              image="./static/images/icons/Tentang/icon8.svg"
              title="Pencahayaan"
            >
              <div className="flex w-[254px]">
                <img
                  className="w-[22px] h-[22px]"
                  src="./static/images/icons/Tentang/checklist.svg"
                  alt=""
                />
                <p className="text-white ms-3 text-[14px] sm:text-[16px]">
                  10% dari luas lantai
                </p>
              </div>
            </CriteriaCard>
            <CriteriaCard
              image="./static/images/icons/Tentang/icon9.svg"
              title="Penghawaan"
            >
              <div className="flex w-[254px]">
                <img
                  className="w-[22px] h-[22px]"
                  src="./static/images/icons/Tentang/checklist.svg"
                  alt=""
                />
                <p className="text-white ms-3 text-[14px] sm:text-[16px]">
                  5% dari luas lantai
                </p>
              </div>
            </CriteriaCard>
          </div>
        </section>
        <section className="pt-[100px] pb-[300px] sm:pb-[90px] relative">
          <img
            className="absolute top-40 left-0 sm:hidden"
            src="./static/images/vectors/bubble.svg"
            alt=""
          />
          <h1 className="text-[#484C57] text-[44px] font-bold leading-[66px] text-center sm:leading-10 sm:text-left sm:ml-5 sm:text-[30px]">
            Implementasi Prinsip Bangunan <br /> Gedung Hijau dalam Bangunan
            Rumah
          </h1>
          <div className="flex gap-[34px] justify-center mt-20 sm:ml-5 sm:flex-col">
            <PrincipleCard
              image="./static/images/icons/Tentang/icon10.svg"
              title="Konservasi Air"
              description={
                <span>
                  Ruang terbuka hijau 30%, penggunaan sumur resapan, dan{' '}
                  <i>rainwater harvesting</i>
                </span>
              }
            />
            <PrincipleCard
              image="./static/images/icons/Tentang/icon11.svg"
              title="Konservasi Energi"
              description="Memaksimalkan penghawaan & pencahayaan alami untuk mengurangi konsumsi listrik"
            />
            <div className="relative z-[2]">
              <img
                className="absolute -z-10 -right-[50px] -bottom-4 sm:hidden"
                src="./static/images/icons/dots-lg.svg"
                alt=""
              />
              <PrincipleCard
                image="./static/images/icons/Tentang/gold-bar.svg"
                className="p-4 rounded-[20px] bg-[#27CBCA]"
                title="Efisiensi Material"
                zIndex="z-10"
                description="Penggunaan material ramah lingkungan dan material bekas layak pakai untuk bangunan rumah"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Tentang
