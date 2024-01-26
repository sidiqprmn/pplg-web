import { Alert, Space, Form } from 'antd'
import React, { useState } from 'react'
import SimpleHeader from 'components/SimpleHeader/SimpleHeader'
import Footer from 'layouts/containers/Public/Footer/Footer'
import TitleForm from 'components/Title/TitleInput'
import InputSelectSearch from 'components/Input/InputSelectSearch'
import InputBiasa from 'components/Input/InputBiasa'
import InputSelect from 'components/Input/InputSelect'
import TextAreaInput from 'components/Input/textArea'
import Captcha from 'components/Captcha/Captcha'
import Navbar from 'layouts/containers/Public/Navbar'
import InputSubmit from 'components/Input/InputSubmit'
import Uploads from 'components/Uploads/Upload'

function BuatPertanyaan() {
  const [form] = Form.useForm()

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ]

  const [formValues, setFormValues] = useState({
    provinsi: '',
    kategori: '',
    kabkota: '',
    nama: '',
  })

  const handleInputChange = (name, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }
  const desktopBgImage = './static/images/backgrounds/buatPertanyaan.png'
  const mobileBgImage = './static/images/backgrounds/mobile-bg-header.png'

  return (
    <div className="justify-center">
      <Navbar />
      <SimpleHeader
        bgImageDesktop={desktopBgImage}
        bgImageMobile={mobileBgImage}
        title=""
      />
      <Space direction="vertical" className="justify-center flex text-center">
        <Alert
          className="text-center mt-[60px] w-[761px] h-[82px] md:w-[334px] md:h-[150px] mx-auto border-[#3D6DA9] text-[14px]"
          description={
            <span className="text-[#3D6DA9] text-[14px] w-[651px] h-[42px]">
              Form ini hanya dapat digunakan untuk <b>pertanyaan satu kali.</b>{' '}
              Untuk melanjutkan dipersilakan untuk{' '}
              <a href="/daftar" className="underline md:no-underline">
                <b>Daftar</b>
              </a>{' '}
              atau{' '}
              <a href="/login" className="underline md:no-underline">
                <b>Login.</b>
              </a>{' '}
              Jawaban akan dikirimkan melalui email Anda.
            </span>
          }
          type="info"
        />
      </Space>
      <div
        className="flex flex-col bg-[#fff] w-[762px] h-full mx-auto mt-[48px] p-10 md:px-4 md:pt-8 rounded-[20px] mb-[128px] md:w-[334px] md:text-left md:items-start"
        style={{ boxShadow: '0 0px 60px #204D841A' }}
      >
        <TitleForm title="Biodata" />
        <Form form={form} autoComplete="off">
          <div className="flex md:flex-col justify-evenly gap-8 pb-[58px] md:w-[302px] border-b-2 border-[#D2D2D8]">
            <div>
              <InputBiasa
                name="inputan_nama"
                label="Nama"
                placeholder="Masukkan Nama Anda"
                className="w-[327px] h-[40px] text-[14px] md:w-[302px]"
                required
                messages="Nama belum diisi"
                type="text"
                value={formValues.nama}
                onChange={(e) => handleInputChange('nama', e.target.value)}
              />
              <InputBiasa
                name="inputan_email"
                label="Email"
                placeholder="Masukkan email Anda"
                className="w-[327px] h-[40px] text-[14px] md:w-[302px]"
                required
                messages="Email belum valid"
                type="text"
              />
              <InputBiasa
                name="inputan_noHp"
                label="Nomor Handphone"
                placeholder="Masukkan nomor handphone Anda"
                className="w-[327px] h-[40px] text-[14px] md:w-[302px]"
                required
                messages="Nomor handphone hanya boleh angka"
                type="number"
              />
            </div>
            <div className="md:mt-[-35px]">
              <InputBiasa
                name="inputan_alamat"
                label="Alamat"
                placeholder="Masukkan Alamat Anda"
                className="w-[327px] h-[40px] text-[14px] md:w-[302px]"
                type="text"
              />
              <div className="md:-mt-1">
                <InputSelectSearch
                  name="provinsi"
                  label="Provinsi"
                  placeholderName="Pilih Provinsi"
                  placeholderStyle="text-[#484C57]"
                  required
                  onChange={(value) => handleInputChange('provinsi', value)}
                  messages="Anda belum memilih provinsi"
                  classNames="w-[327px] h-[40px] md:w-[302px] rounded-lg text-[#484C57] text-[14px] mt-[11px]"
                />
                <input type="hidden" value={formValues.provinsi} />
                <InputSelectSearch
                  name="kabupaten"
                  label="Kabupaten/Kota"
                  placeholderName="Pilih Kabupaten/Kota"
                  placeholderStyle="text-[#484C57]"
                  required
                  onChange={(value) => handleInputChange('kabkota', value)}
                  messages="Anda belum memilih kabupaten/kota"
                  classNames="w-[327px] h-[40px] md:w-[302px] rounded-lg text-[#484C57] text-[14px] mt-[11px]"
                />
                <input type="hidden" value={formValues.kabkota} />
              </div>
            </div>
          </div>

          <div className="mt-[60px]">
            <TitleForm title="Pertanyaan" />
          </div>

          <div className="flex justify-between md:flex-col">
            <InputBiasa
              name="inputan_judul"
              required
              label="Judul"
              placeholder="Masukkan Judul Pertanyaan"
              className="w-[327px] h-[40px] md:w-[302px]"
              messages="Judul belum diisi"
              type="text"
            />
            <InputSelect
              messages="Anda belum memilih Kategori"
              options={options}
              label="Kategori"
              placeholder="Pilih Kategori"
              onChange={(value) => handleInputChange('kategori', value)}
              required
              className="w-[327px] h-[40px] md:w-[302px] rounded-lg focus:outline-none focus:border-blue-500 text-[#484C57] text-[14px]"
            />
            <input type="hidden" value={formValues.kategori} />
          </div>
          <TextAreaInput
            name="isiPertanyaan"
            placeholder="Masukan isi pertanyaan"
            required
            label="Isi Pertanyaan"
            styleTextArea="h-[120px] md:w-[300px]"
            message="Isi pertanyaan tidak boleh kosong"
          />
          {/* Upload start */}
          <div className="text-[#484C57] mb-5 md:mb-3">
            <Uploads />
          </div>
          {/* Upload finish */}

          <Captcha required />
          <InputSubmit
            className="w-full text-center text-[#fff] bg-[#204D84] font-[600] h-[54px] mt-[44px] rounded-lg cursor-pointer relative md:mt-6 md:mb-0"
            value="Kirim Pertanyaan"
          />
        </Form>
      </div>
      <Footer />
    </div>
  )
}

export default BuatPertanyaan
