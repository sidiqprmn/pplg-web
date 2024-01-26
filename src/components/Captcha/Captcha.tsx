import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Form } from 'antd'

function onChange(value) {
  // eslint-disable-next-line no-console
  console.log('Captcha value:', value)
}

function Captcha({ required }) {
  return (
    <div>
      <span className="flex mb-3">
        <span className="text-[#404258] md:hidden">Captcha</span>
        {required && (
          <span className="text-red-500 ml-1 text-[12px] md:text-[12px] md:hidden">
            *
          </span>
        )}
      </span>
      <Form.Item
        className="mb-7 md:mt-0"
        name="Captca"
        rules={[{ required, message: 'Captcha belum diklik' }]}
      >
        <ReCAPTCHA
          sitekey="6LcoQfgmAAAAALCV9R9TP4TuU5yhGV3h3bGlwiQ1"
          onChange={onChange}
          hl="id"
        />
      </Form.Item>
    </div>
  )
}

export default Captcha
