import { Form } from 'antd'
import BoxSurvey from 'components/BoxSurvey/BoxSurvey'
import InputBiasa from 'components/Input/InputBiasa'
import InputSelect from 'components/Input/InputSelect'
import TextAreaInput from 'components/Input/textArea'
import SimpleHeader from 'components/SimpleHeader/SimpleHeader'
import { optionOneSurvey } from 'data/surveyData'
import Link from 'next/link'
import React, { useState } from 'react'
import RadioSurvey from './RadioSurvey'
import InputSelectSearch from 'components/Input/InputSelectSearch'

function Survey() {
  const [show, setShow] = useState(false)
  const [formValues, setFormValues] = useState({
    nama: '',
    pendidikan: '',
    jenisKelamin: '',
    usia: '',
    alamat: '',
    provinsi: '',
    kabupaten: '',
  })
  const [surveyValues, setSurveyValues] = useState({
    jawaban1: '',
    jawaban2: '',
    jawaban3: '',
    jawaban4: '',
    jawaban5: '',
    jawaban6: '',
    jawaban7: '',
    jawaban8: '',
    jawaban9: '',
  })

  const options = [
    {
      value: 'Laki - Laki',
      label: 'Laki - Laki',
    },
    {
      value: 'Perempuan',
      label: 'Perempuan',
    },
  ]

  const [opSuvey, setOpSuvey] = useState({
    survey1: '',
    survey2: '',
    survey3: '',
    survey4: '',
    survey5: '',
    survey6: '',
    survey7: '',
    survey8: '',
    survey9: '',
  })

  const handleInputChange = (name, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
    setSurveyValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }
  const desktopBgImage = './static/images/backgrounds/survey.png'
  const mobileBgImage = './static/images/backgrounds/mobile-bg-header.png'

  // const onFinish = (values) => {
  //   console.log('Form values:', values)
  //   if (surveyValues.jawaban9 !== '') {
  //     setShow(true)
  //   }
  // }

  return (
    <div>
      {!show ? (
        <div>
          <SimpleHeader
            bgImageDesktop={desktopBgImage}
            bgImageMobile={mobileBgImage}
            title="SURVEI KEPUASAN PUBLIK"
          />
          <Form className="my-[80px] flex flex-col justify-center items-center gap-y-8">
            <BoxSurvey>
              <h5 className="text-[32px] text-[#14437C] font-semibold">
                Data Diri
              </h5>
              <p className="text-[#868686]">Harap mengisi data diri Anda</p>
              <div className="flex justify-between mt-10">
                <div className="w-[297px]">
                  <InputBiasa
                    type="text"
                    name="inputan_nama"
                    required
                    label="Nama"
                    placeholder="Masukkan Nama Lengkap Anda"
                    className="w-[full] h-[40px] rounded-lg"
                    messages="Nama lengkap belum diisi"
                    value={formValues.nama}
                    onChange={(e) => handleInputChange('nama', e.target.value)}
                  />
                  <InputSelect
                    placeholder="Pilih Jenis Kelamin"
                    messages="Anda belum memilih jenis kelamin"
                    options={options}
                    label="Pilih Jenis Kelamin"
                    required
                    className="w-[full] rounded-lg text-[#626687]  focus:outline-none focus:border-blue-500 "
                    onChange={(value) => handleInputChange('provinsi', value)}
                  />
                  <InputBiasa
                    type="text"
                    name="inputan_usia"
                    required
                    label="Usia"
                    placeholder="Masukkan Usia Anda"
                    className="w-[full] h-[40px] rounded-lg"
                    messages="Usia belum diisi"
                    value={formValues.usia}
                    onChange={(e) => handleInputChange('usia', e.target.value)}
                  />
                  <InputBiasa
                    type="text"
                    name="inputan_pendidikan"
                    required
                    label="Pendidikan"
                    placeholder="Masukkan Pendidikan Anda"
                    className="w-[full] h-[40px] rounded-lg"
                    messages="Pendidikan belum diisi"
                    value={formValues.pendidikan}
                    onChange={(e) =>
                      handleInputChange('pendidikan', e.target.value)
                    }
                  />
                </div>
                <div className="w-[297px]">
                  <TextAreaInput
                    name="alamat"
                    placeholder="Masukan Alamat Anda"
                    label="Alamat"
                    height="h-[144px]"
                  />
                  <InputSelectSearch
                    name="provinsi"
                    label="Provinsi"
                    placeholderName="Pilih Provinsi"
                    placeholderStyle="text-[#484C57]"
                    required={true}
                    onChange={(value) => handleInputChange('provinsi', value)}
                    messages="Anda belum memilih provinsi"
                    classNames="w-full h-[40px] md:w-[302px] rounded-lg text-[#484C57] text-[14px] mt-[11px]"
                  />
                  <InputSelectSearch
                    name="kabupaten"
                    label="Kabupaten/Kota"
                    placeholderName="Pilih Kabupaten/Kota"
                    placeholderStyle="text-[#484C57]"
                    required
                    onChange={(value) => handleInputChange('kabupaten', value)}
                    messages="Anda belum memilih kabupaten/kota"
                    classNames="w-full md:w-[302px] rounded-lg text-[#484C57] text-[14px] mt-[11px] bg-black"
                  />
                </div>
              </div>
            </BoxSurvey>
            <BoxSurvey>
              <h5 className="text-[32px] text-[#14437C] font-semibold mb-10">
                Survei Kepuasan Publik
              </h5>
              <ul className="flex flex-col gap-7">
                <li className="list-decimal">
                  <h1 className="text-[#20434E]">
                    Bagaimana pendapatmu tentang kesesuaian persyaratan
                    pelayanan dengan jenis pelayanannya?
                  </h1>
                  <div className="flex gap-4">
                    {optionOneSurvey.map((e) => {
                      return (
                        <RadioSurvey
                          img={e.image}
                          value={e.value}
                          opSuvey={opSuvey.survey1}
                          surveyHandler={() => {
                            setOpSuvey({ ...opSuvey, survey1: e.value })
                            handleInputChange('jawaban1', e.value)
                          }}
                        />
                      )
                    })}
                  </div>
                </li>
                <li className="list-decimal">
                  <h1 className="text-[#20434E]">
                    Bagaimana pendapatmu tentang tidak dipungutnya biaya dalam
                    pelayanan?
                  </h1>
                  <div className="flex gap-4">
                    {optionOneSurvey.map((e) => {
                      return (
                        <RadioSurvey
                          img={e.image}
                          value={e.value}
                          opSuvey={opSuvey.survey2}
                          surveyHandler={() => {
                            setOpSuvey({ ...opSuvey, survey2: e.value })
                            handleInputChange('jawaban2', e.value)
                          }}
                        />
                      )
                    })}
                  </div>
                </li>
                <li className="list-decimal">
                  <h1 className="text-[#20434E]">
                    Bagaimana pendapatmu tentang kesesuaian produk antara yang
                    tercantum dalam standar pelayanan dengan hasil yang
                    diberikan?
                  </h1>
                  <div className="flex gap-4">
                    {optionOneSurvey.map((e) => {
                      return (
                        <RadioSurvey
                          img={e.image}
                          value={e.value}
                          opSuvey={opSuvey.survey3}
                          surveyHandler={() => {
                            setOpSuvey({ ...opSuvey, survey3: e.value })
                            handleInputChange('jawaban3', e.value)
                          }}
                        />
                      )
                    })}
                  </div>
                </li>
                <li className="list-decimal">
                  <h1 className="text-[#20434E]">
                    Bagaimana pendapatmu tentang kompetensi/kemampuan petugas
                    dalam memberikan layanan?
                  </h1>
                  <div className="flex gap-4">
                    {optionOneSurvey.map((e) => {
                      return (
                        <RadioSurvey
                          img={e.image}
                          value={e.value}
                          opSuvey={opSuvey.survey4}
                          surveyHandler={() => {
                            setOpSuvey({ ...opSuvey, survey4: e.value })
                            handleInputChange('jawaban4', e.value)
                          }}
                        />
                      )
                    })}
                  </div>
                </li>
                <li className="list-decimal">
                  <h1 className="text-[#20434E]">
                    Bagaimana pendapatmu tentang kemudahan prosedur pelayanan
                    KRS?
                  </h1>
                  <div className="flex gap-4">
                    {optionOneSurvey.map((e) => {
                      return (
                        <RadioSurvey
                          img={e.image}
                          value={e.value}
                          opSuvey={opSuvey.survey5}
                          surveyHandler={() => {
                            setOpSuvey({ ...opSuvey, survey5: e.value })
                            handleInputChange('jawaban5', e.value)
                          }}
                        />
                      )
                    })}
                  </div>
                </li>
                <li className="list-decimal">
                  <h1 className="text-[#20434E]">
                    Bagaimana pendapatmu tentang kecepatan waktu dalam
                    memberikan pelayanan?
                  </h1>
                  <div className="flex gap-4">
                    {optionOneSurvey.map((e) => {
                      return (
                        <RadioSurvey
                          img={e.image}
                          value={e.value}
                          opSuvey={opSuvey.survey6}
                          surveyHandler={() => {
                            setOpSuvey({ ...opSuvey, survey6: e.value })
                            handleInputChange('jawaban6', e.value)
                          }}
                        />
                      )
                    })}
                  </div>
                </li>
                <li className="list-decimal">
                  <h1 className="text-[#20434E]">
                    Bagaimana pendapatmu tentang kemudahan prosedur pelayanan
                    KRS?
                  </h1>
                  <div className="flex gap-4">
                    {optionOneSurvey.map((e) => {
                      return (
                        <RadioSurvey
                          img={e.image}
                          value={e.value}
                          opSuvey={opSuvey.survey7}
                          surveyHandler={() => {
                            setOpSuvey({ ...opSuvey, survey7: e.value })
                            handleInputChange('jawaban7', e.value)
                          }}
                        />
                      )
                    })}
                  </div>
                </li>
                <li className="list-decimal">
                  <h1 className="text-[#20434E]">
                    Bagaimana pendapatmu tentang kesopanan dan keramahan petugas
                    dalam memberikan layanan?
                  </h1>
                  <div className="flex gap-4">
                    {optionOneSurvey.map((e) => {
                      return (
                        <RadioSurvey
                          img={e.image}
                          value={e.value}
                          opSuvey={opSuvey.survey8}
                          surveyHandler={() => {
                            setOpSuvey({ ...opSuvey, survey8: e.value })
                            handleInputChange('jawaban8', e.value)
                          }}
                        />
                      )
                    })}
                  </div>
                </li>
                <li className="list-decimal">
                  <h1 className="text-[#20434E]">
                    Bagaimana pendapatmu tentang kesopanan dan keramahan petugas
                    dalam memberikan layanan?
                  </h1>
                  <div className="flex gap-4">
                    {optionOneSurvey.map((e) => {
                      return (
                        <RadioSurvey
                          img={e.image}
                          value={e.value}
                          opSuvey={opSuvey.survey9}
                          surveyHandler={() => {
                            setOpSuvey({ ...opSuvey, survey9: e.value })
                            handleInputChange('jawaban9', e.value)
                          }}
                        />
                      )
                    })}
                  </div>
                </li>
              </ul>
              <div className="flex mt-[88px] justify-center gap-5">
                <Link href="/">
                  <button className="w-[104px] h-[54px] text-[#204D84] border-[1px] border-[#204D84] rounded-[8px] cursor-pointer">
                    Cancel
                  </button>
                </Link>
                <input
                  type="submit"
                  className="w-[104px] h-[54px] bg-[#204D84] text-white rounded-[8px] cursor-pointer"
                  value="Selesai"
                  onClick={() => setShow(true)}
                />
              </div>
            </BoxSurvey>
          </Form>
        </div>
      ) : (
        <div className="h-[100vh]">
          <div className="mt-[132px] mx-auto flex flex-col items-center">
            <img src="./static/images/vectors/survey.svg" alt="" />
            <h5 className="text-[#374774] text-[35px] font-semibold mt-[32px]">
              Terima Kasih
            </h5>
            <p className="text-[#828282]">Masukan Anda Telah Kami Terima</p>
            <Link href="/">
              <button className="h-[54px] w-[207px] mt-[40px] bg-[#204D84] text-white rounded-[8px] cursor-pointer">
                Kembali Ke Home
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Survey
