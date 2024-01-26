import React, { useState, useEffect } from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import classNames from 'classnames'
import ContentImg from 'components/ContentImg/ContentImg'
import style from 'components/ContentImg/ContentImg.module.scss'
import InputBiasa from 'components/Input/InputBiasa'
import Password from 'components/Password/Password'
import Link from 'next/link'
import { Form } from 'antd'
import Captcha from 'components/Captcha/Captcha'
import InputSubmit from 'components/Input/InputSubmit'

function Login() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
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
    <div className="flex bg-white">
      <div className="left w-[50%] h-[100vh] bg-red-50 md:hidden">
        <ContentImg
          classMain="flex flex-col w-full h-[1018px]"
          classGradient="w-full h-[50%] bg-gradient-to-b from-[#153b77] to-transparent"
          classBgHouse={classNames(
            'w-full h-[50%] bg-cover bg-center ',
            style['bg-house-login'],
          )}
        />
      </div>

      <div className="right w-[50%] h-[1018px] bg-white md:h-[812px] md:w-[100%] md:items-center md:justify-center md:flex md:flex-co">
        <div className="flex justify-between p-6">
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
            className="md:mb-[610px] md:mt-[50px] md:mr-[200px]"
          />
        </div>
        <div className="form flex flex-col justify-center items-center mt-[152px] md:w-[full] md:h-[395px] md:absolute md:top-0">
          <div className="hidden md:inline md:mr-auto md:mt-[140px]">
            <Link href="/">
              <img
                src="./static/images/logo/logo-djp.svg"
                alt=""
                srcSet=""
                className="md:w-[262px] md:h-[29px]"
              />
            </Link>
          </div>
          <div className="md:mt-[115px]">
            <h1 className="text-[44px] w-[80px] font-bold leading-[66px] tracking-wider text-[#484C57] md:text-[24px] md:text-[#000000]">
              MASUK
            </h1>
            {/* New push */}
            <hr className="bg-[#FDC535] h-[6px] w-[80px] mb-[48px] mt-[-12px] border-none rounded-[100px] md:w-[51px] md:h-[5px] md:mb-[41px]" />
            <Form className="space-y-[6px]">
              <InputBiasa
                type="email"
                name="email"
                required
                label="Email"
                placeholder="Masukkan Email Anda"
                className="w-[496px] h-[40px] rounded-[8px] md:w-[334px]"
                messages="Email belum diisi"
                value={formValues.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
              <Password
                name="password"
                required
                label="Password"
                placeholder="Masukkan Password Anda"
                classNamePass="w-[496px] h-[40px] rounded-[8px] md:w-[334px]"
                messages="Password belum diisi"
                value={formValues.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
              />
              <div className="forgotPw text-[#204D84] text-[12px] font-Lexend font-[400px] leading-[18px]  text-right">
                <p className="mt-[-24px]">Lupa Password?</p>
              </div>

              <div className="md:hidden">
                <Captcha required />
              </div>
              <br />
              <br />
              <div className="pt-4 md:pt-0">
                <InputSubmit
                  className=" w-[496px] text-center text-[#fff] bg-[#204D84] font-[600] h-[54px] md:h-[45px] mt-[15px] md:w-[334px] rounded-lg cursor-pointer"
                  value="Login"
                />
              </div>
            </Form>
            <div className="createAcc text-center mt-[60px] md:mt-[172px]">
              <h2 className="text-[#484C57] font-[400px] text-[12px] leading-[18px]">
                Belum punya akun? Silahkan <span />
                <Link href="./daftar" className="text-[#204D84] font-[600px]">
                  daftar di sini
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
