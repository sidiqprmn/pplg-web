import { Button, Form, Modal } from 'antd'
import InputBiasa from 'components/Input/InputBiasa'
import InputSubmit from 'components/Input/InputSubmit'
import TextAreaInput from 'components/Input/textArea'
import React, { useState } from 'react'

function Saran() {
  // value form
  const [formValues, setFormValues] = useState({
    nama: '',
    email: '',
    judul: '',
  })

  const handleInputChange = (name, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  // show modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <button
        className="bg-[#FDC535] w-[92px] h-[33px] flex justify-center items-center gap-x-1 rounded-[4px] mt-11"
        onClick={showModal}
      >
        Saran <img src="./static/images/icons/chat.svg" alt="" />
      </button>
      <Modal
        title={
          <div className="flex border-b-2 gap-3 py-2 pb-4">
            <img
              className="p-3 rounded-full bg-[#F0F5F9]"
              src="./static/images/icons/icon-saran.svg"
              alt=""
            />
            <h5 className="text-[#45545F] text-[28px] mt-2">Saran</h5>
          </div>
        }
        className="top-5"
        width={546}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Form className="px-5">
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
            type="judul"
            name="judul"
            label="Judul"
            placeholder="Masukkan Judul Anda"
            className="w-[full] h-[40px] rounded-lg"
            required
            messages="Judul belum diisi"
            value={formValues.judul}
            onChange={(e) => handleInputChange('judul', e.target.value)}
          />
          <TextAreaInput
            name="saran"
            placeholder="Masukan Saran Anda Anda"
            label="Saran"
            height="h-[144px]"
            message=''
          />
          <Form.Item>
            <InputSubmit
              className="bg-[#204D84] w-full h-[44px] mt-5 text-white cursor-pointer rounded"
              value="Kirim"
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default Saran
