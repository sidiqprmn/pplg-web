import React, { useState, useEffect } from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import Checkbox from 'components/Checkbox/Checkbox'
import InputBiasa from 'components/Input/InputBiasa'
import Password from 'components/Password/Password'
import { Button, Form } from 'antd'
import InputSelect from 'components/Input/InputSelect'
import Captcha from 'components/Captcha/Captcha'
import ContentImg from 'components/ContentImg/ContentImg'
import classNames from 'classnames'
import style from 'components/ContentImg/ContentImg.module.scss'
import Link from 'next/link'
import InputSubmit from 'components/Input/InputSubmit'

type CheckboxOption = {
  label: string
  value: string
  logo: string
}

function Daftar() {
  const [isPetugasSelected, setIsPetugasSelected] = useState<boolean>(false)
  const [isUmumSelected, setIsUmumSelected] = useState<boolean>(false)

  const optionsTugas = [
    {
      label: 'Umum',
      value: 'umum',
      logo: './static/images/icons/daftar/icon-umum.png',
    },
    {
      label: 'Petugas',
      value: 'petugas',
      logo: './static/images/icons/daftar/icon-petugas.png',
    },
  ]
  const options = [
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

  const handleCheckboxChange = (selectedOptions: CheckboxOption[]) => {
    const isPetugasSelecteds = selectedOptions.some(
      (option) => option.value === 'petugas',
    )
    const isUmumSelecteds = selectedOptions.some(
      (option) => option.value === 'umum',
    )

    setIsPetugasSelected(isPetugasSelecteds)
    setIsUmumSelected(isUmumSelecteds)
  }
  const [formValues, setFormValues] = useState({
    nama: '',
    email: '',
    password: '',
    rePassword: '',
    code: '',
    provinsi: '',
  })
  const handleInputChange = (name, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }
  // useEffect(() => {
  //   console.log('Current formValues:', formValues)
  // }, [formValues])

  return (
    <div className="flex justify-between h-[1479px] md:w-[100%] bg-white text-[#484C57]">
      <div className="w-[50%] bg-[#265794] text-[#fff]  md:hidden">
        <ContentImg
          classMain="flex flex-col w-full h-[1479px]"
          classGradient="w-full h-[100%]"
          classBgHouse={classNames(
            'w-full h-[65.8%] bg-cover bg-center mix-blend-soft-light ',
            style['bg-house-daftar'],
          )}
        />
      </div>

      <div className="w-[50%] md:w-[100%] h-[1329px] bg-white p-10 ">
        <div className="flex justify-between">
          <div className="backHome flex items-center text-[#626687]  md:hidden">
            <FaAngleLeft className="mr-2" />
            <Link
              href="/"
              className="text-[14px] font-normal leading-[21px] tracking-normal"
            >
              Kembali ke home
            </Link>
          </div>
          <img
            src="./static/images/logo/logo-krs.svg"
            alt=""
            className="md:mt-[122px] md:absolute md:top-[-21px] md:ml-[0px]"
          />
        </div>

        <div className="form flex flex-col justify-center items-center md:mt-[-124px]">
          <div className="ps-[30px] md:ps-5 py-28">
            <div className="hidden md:inline md:mt-[47px]">
              <Link href="/">
                <img
                  src="./static/images/logo/logo-djp.svg"
                  alt=""
                  srcSet=""
                  className="md:w-[262px] md:ml-[15px] md:h-[29px]"
                />
              </Link>
            </div>
            <h1 className="text-[44px] w-[80px] md:ml-[10px] font-bold leading-[66px] tracking-wider text-[#484C57] md:mt-[110px] md:text-[24px] md:text-[#000]">
              DAFTAR
            </h1>
            <hr className="bg-[#FDC535] h-[6px] w-[80px] mb-[48px] md:ml-[10px] mt-[-12px] border-none rounded-[100px] md:w-[51px] md:h-[5px] md:mb-[41px]" />
            <h1 className="mb-[13px] text-base font-normal leading-6 tracking-normal">
              Daftar Sebagai: <span className="text-red-500">*</span>
            </h1>
            <div className="md:w-[365px]">
              <Checkbox
                options={optionsTugas}
                onChange={handleCheckboxChange}
              />
            </div>
            <Form>
              <div className="md:w-[345px] justify-center items-center md:mt-[30px]">
                <InputBiasa
                  type="text"
                  name="inputan_nama"
                  required
                  label="Nama Lengkap"
                  placeholder="Masukkan Nama Lengkap Anda"
                  className="w-[full] h-[40px] rounded-lg"
                  messages="Nama lengkap belum diisi"
                  value={formValues.nama}
                  onChange={(e) => handleInputChange('nama', e.target.value)}
                />

                <InputBiasa
                  type="email"
                  name="inputan_email"
                  required
                  label="Email"
                  placeholder="Masukkan Email Anda"
                  className="w-[full] h-[40px] rounded-lg"
                  messages="Email belum diisi"
                  value={formValues.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />

                <Password
                  name="inputan_pw"
                  messages="Password belum diisi"
                  required
                  label="Password"
                  classNamePass="w-[full] h-[40px] px-3 rounded-lg"
                  placeholder="Masukkan Password Anda"
                  value={formValues.password}
                  onChange={(e) =>
                    handleInputChange('password', e.target.value)
                  }
                />

                <Password
                  name="inputan_repw"
                  required
                  messages="Ulangi password belum diisi"
                  label="Ulangi Password"
                  classNamePass="w-[full] h-[40px] px3 rounded-lg"
                  placeholder="Ulangi Password Anda"
                  value={formValues.rePassword}
                  onChange={(e) =>
                    handleInputChange('password', e.target.value)
                  }
                />

                <InputSelect
                  placeholder="Pilih Provinsi"
                  messages="Anda belum memilih provinsi"
                  options={options}
                  label="Pilih Provinsi"
                  required
                  className="w-[full] rounded-lg text-[#626687]  focus:outline-none focus:border-blue-500 "
                  onChange={(value) => handleInputChange('provinsi', value)}
                />
                <input type="hidden" value={formValues.provinsi} />
                {isPetugasSelected && (
                  <Password
                    name="inputan_code"
                    required
                    messages="Kode Unik/ID belum diisi"
                    classNamePass="w-[full] h-[40px]"
                    label="Kode Unik/ID"
                    placeholder="Masukkan Kode Unik/ID Anda"
                    value={formValues.code}
                    onChange={(e) =>
                      handleInputChange('password', e.target.value)
                    }
                  />
                )}
                {isPetugasSelected && (
                  <Captcha required messages="Captcha perlu di klik" />
                )}
                {isUmumSelected && (
                  <Captcha required messages="Captcha perlu di klik" />
                )}
                <br />
                <br />
                <br />
                <InputSubmit
                  className="hidden md:inline w-[492px] md:h-[50px] md:w-[345px] md:mt-[-10px] text-center text-[#fff] bg-[#204D84] font-[600] h-[54px] mt-[-10px] rounded-lg cursor-pointer"
                  value="Login"
                />
                <InputSubmit
                  className="md:hidden w-[492px] md:w-[345px] text-center text-[#fff] bg-[#204D84] font-[600] h-[54px] mt-[-10px] rounded-lg cursor-pointer"
                  value="Daftar"
                />
                <div className="createAcc text-center mt-[48px] md:mt-[41px]">
                  <h2 className="text-[#484C57] font-[400px] text-[12px] leading-[18px] ">
                    Sudah punya akun? Silahkan <span />
                    <Link
                      href="./login"
                      className="text-[#204D84] font-[600px]"
                    >
                      login di sini
                    </Link>
                  </h2>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Daftar
