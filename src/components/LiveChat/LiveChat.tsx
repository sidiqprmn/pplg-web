import React, { useState } from 'react'
import { Button, Form } from 'antd'
import chatData from 'data/chatData'
import InputBiasa from 'components/Input/InputBiasa'
import InputSelect from 'components/Input/InputSelect'
import BubbleChat from './partials/BubbleChat'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import InputSubmit from 'components/Input/InputSubmit'
import InputSelectSearch from 'components/Input/InputSelectSearch'

function CustomerServ({ onClose }) {
  const [next, setNext] = useState(false)
  const [showEmoji, setShowEmoji] = useState(false)
  const [reply, setReply] = useState('')

  // add emoji
  const addEmoji = (e) => {
    const sym = e.unified.split('_')
    const codeArray = []
    sym.forEach((el) => codeArray.push('0x' + el))
    let emoji = String.fromCodePoint(...codeArray)
    setReply(reply + emoji)
  }

  // regist for start chat
  const [formValues, setFormValues] = useState({
    nama: '',
    email: '',
    judulPertanyaan: '',
    noHandPhone: '',
    alamat: '',
    kabkota: '',
    provinsi: '',
    kategori: '',
  })

  // this is variable value for first result chat after regist start
  const {
    nama,
    email,
    noHandPhone,
    judulPertanyaan,
    alamat,
    kabkota,
    provinsi,
    kategori,
  } = formValues
  const resultRegistChat = `Nama: ${nama} \n Email: ${email} \nNo HP: ${noHandPhone} \nAlamat: ${alamat} \nKabkota: ${kabkota} \nProvinsi: ${provinsi} \nJudul Pertanyaan: ${judulPertanyaan} \nKategori: ${kategori}`
  const welcomeAdminChat =
    'Butuh bantuan penelusuran informasi, dan penelusuran data? Silahkan komunikasikan kepada kami melalui chattingan ini'

  const provinsiOptions = [
    {
      value: 'option1',
      label: 'Option 1',
    },
    {
      value: 'option2',
      label: 'Option 2',
    },
    {
      value: 'option3',
      label: 'Option 3',
    },
  ]
  const kategoriOptions = [
    {
      value: 'option1',
      label: 'Option 1',
    },
    {
      value: 'option2',
      label: 'Option 2',
    },
    {
      value: 'option3',
      label: 'Option 3',
    },
  ]

  const onFinish = (values) => {
    console.log('Form values:', values)
    if (formValues.alamat !== '') {
      setNext(true)
    }
  }

  const handleInputChange = (name, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  return (
    <div className="fixed bg-white w-[420px] h-[550px] z-[10] bottom-7 right-[22px] rounded-[10px] shadow-[0_4px_80px_0px_rgba(0,0,0,0.15)] md:w-full md:h-full md:right-0 md:bottom-0">
      <header className="h-[104px] bg-[#204D84] flex items-center px-[25px] rounded-t-[10px]">
        <img src="./static/images/icons/Ruki.svg" alt="" srcSet="" />
        <h1 className="text-white text-[24px] ms-5 mt-3">Ruki</h1>
        <button className="ms-auto text-white" onClick={onClose}>
          <img src="./static/images/icons/fi_x.svg" alt="" />
        </button>
      </header>
      {!next ? (
        // this is for regist start chat
        <>
          <div className="px-4 relative">
            <h1 className="text-[14px] font-normal leading-6 text-[#626687] py-[15px]">
              Selamat Datang di Layanan Live Chat Klinik Rumah Swadaya. Silakan
              isi form di bawah ini untuk memulai konsultasi dengan kami.
            </h1>
            <div className="text-[14px] px-2 overflow-y-auto h-[325px] scrollbar-thin scrollbar-track-[#D9D9D9] scrollbar-thumb-[#204D84] md:h-[400px]">
              <Form onFinish={onFinish} className="pb-[70px] md:pb-[20px]">
                <InputBiasa
                  type="text"
                  name="nama"
                  label="Nama"
                  placeholder="Masukkan Nama Anda"
                  className="w-[full] h-[40px] rounded-lg"
                  required
                  messages="Nama belum diisi"
                  value={formValues.nama}
                  onChange={(e) => handleInputChange('nama', e.target.value)}
                />
                <InputBiasa
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="Masukkan Email Anda"
                  className="w-[full] h-[40px] rounded-lg"
                  required
                  messages="Email belum diisi"
                  value={formValues.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
                <InputBiasa
                  type="number"
                  name="noHandPhone"
                  label="Nomor Handphone"
                  placeholder="Masukkan Nomor Handphone Anda"
                  className="w-[full] h-[40px] rounded-lg"
                  required
                  messages="No HandPhone belum diisi"
                  value={formValues.noHandPhone}
                  onChange={(e) =>
                    handleInputChange('noHandPhone', e.target.value)
                  }
                />
                <InputBiasa
                  type="text"
                  name="alamat"
                  label="Alamat"
                  placeholder="Masukkan Alamat Anda"
                  className="w-[full] h-[40px] rounded-lg"
                  value={formValues.alamat}
                  onChange={(e) => handleInputChange('alamat', e.target.value)}
                />
                <InputSelectSearch
                  name="provinsi"
                  label="Provinsi"
                  placeholderName="Pilih Provinsi"
                  placeholderStyle="text-[#484C57]"
                  required={true}
                  onChange={(value) => handleInputChange('provinsi', value)}
                  messages="Anda belum memilih provinsi"
                  classNames="w-full h-[40px] md:w-[330px] rounded-lg text-[#484C57] text-[14px] mt-[11px]"
                />
                <input type="hidden" value={formValues.provinsi}/>
                <InputSelectSearch
                  name="kabupaten"
                  label="Kabupaten/Kota"
                  placeholderName="Pilih Kabupaten/Kota"
                  placeholderStyle="text-[#484C57]"
                  required
                  onChange={(value) => handleInputChange('kabupaten', value)}
                  messages="Anda belum memilih kabupaten/kota"
                  classNames="w-full md:w-[330px] rounded-lg text-[#484C57] text-[14px] mt-[11px] bg-black"
                />
                <input type="hidden" value={formValues.kabkota}/>
                <InputBiasa
                  type="text"
                  name="judulPertanyaan"
                  label="Judul Pertanyaan"
                  placeholder="Masukkan Judul Pertanyaan Anda"
                  className="w-[full] rounded-lg h-[40px]"
                  required
                  messages="Judul Pertanyaan belum diisi"
                  value={formValues.judulPertanyaan}
                  onChange={(e) =>
                    handleInputChange('judulPertanyaan', e.target.value)
                  }
                />
                <InputSelect
                  placeholder="Pilih Katergori"
                  options={kategoriOptions}
                  label="Pilih Kategori"
                  required
                  className="w-[full] rounded-lg text-[#626687] focus:outline-none focus:border-blue-500"
                  messages="Kategori belum diisi"
                  onChange={(value) => handleInputChange('kategori', value)}
                />
                <input type="hidden" value={formValues.kategori}/>
                <Form.Item className="bg-white px-4 w-full left-0 absolute -bottom-6 md:-bottom-[75px]">
                  {/*  */}
                  {/* <Button
                    type="primary"
                    className="bg-[#204D84] w-full h-[44px] mt-5"
                    htmlType="submit"
                  >
                    Mulai Chat
                  </Button> */}
                  <InputSubmit
                    className="bg-[#204D84] w-full h-[44px] text-white cursor-pointer rounded"
                    value="Mulai Chat"
                  />
                </Form.Item>
              </Form>
            </div>
          </div>
        </>
      ) : (
        // this for live chat with admin
        <div>
          <div className="h-[450px] rounded-b-[10px] relative md:h-full">
            <div className="h-[375px] overflow-y-auto px-4 scrollbar-thin scrollbar-track-[#D9D9D9] scrollbar-thumb-[#204D84] md:h-[570px]">
              {/* this for first chat user and admin after regist */}
              <BubbleChat.BubbleChatAdmin text={welcomeAdminChat} />
              <BubbleChat.BubbleChatUser text={resultRegistChat} />
              <BubbleChat.BubbleChatAdmin text={`Halo kak ${nama}`} />
              <BubbleChat.BubbleChatAdmin text={`Dengan Alexander`} />
              <BubbleChat.BubbleChatAdmin text={`Ada yang bisa dibantu ?`} />
              {/* {this for fecth data chat and render with use map data chat} */}
              {/* {chatData.map((data) =>
                // validation for render bubble chat admin or user
                data.role === 'admin' ? (
                  <BubbleChat.BubbleChatAdmin text={data.text} />
                ) : (
                  <BubbleChat.BubbleChatUser text={data.text} />
                ),
              )} */}
            </div>
            <form className="w-full px-[30px] bg-white pt-4 rounded-b-[10px] flex items-center absolute bottom-3 shadow-[0_-3px_10px_0px_rgba(0,0,0,0.05)] z-10 md:sticky md:h-[70px] md:pb-3 md:-bottom-1 md:rounded-none">
              {showEmoji && (
                <div className="absolute bottom-[50px]">
                  <Picker data={data} onEmojiSelect={addEmoji} />
                </div>
              )}
              <img
                className="cursor-pointer"
                src="./static/images/icons/smile.svg"
                alt=""
                onClick={() => setShowEmoji(!showEmoji)}
              />
              <textarea
                value={reply}
                className="outline-none w-full mx-3 resize-none scrollbar-none pt-3"
                placeholder="Balas ..."
                onChange={(e) => setReply(e.target.value)}
              />
              <button
                className="bg-[#204D84] h-[40px] w-[55px] rounded-full flex justify-center items-center ms-[15px] md:w-[70px]"
                type="submit"
              >
                <img
                  src="./static/images/icons/chevron-right-white.png"
                  alt=""
                />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default CustomerServ
