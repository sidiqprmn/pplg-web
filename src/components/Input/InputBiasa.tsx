import React from 'react'
import { Form, Input } from 'antd'

interface InputBiasaProps {
  name: string
  className?: string
  label: string
  placeholder: string
  messages?: string
  required?: boolean
  type: string
  value?: any
  onChange?: any
}

function InputBiasa(props: InputBiasaProps) {
  const {
    name,
    className,
    placeholder,
    label,
    messages,
    required,
    type,
    value,
    onChange,
  } = props
  return (
    <div>
      <span className="flex mb-3">
        <span className="text-[#404258]">{label}</span>
        {required && (
          <span className="text-red-500 ml-1 text-[12px] md:text-[12px]">
            *
          </span>
        )}
      </span>
      <Form.Item
        className="mb-7"
        name={name}
        rules={[{ required, message: messages }]}
      >
        <Input
          type={type}
          placeholder={placeholder}
          className={className}
          value={value}
          onChange={onChange}
        />
      </Form.Item>
    </div>
  )
}

export default InputBiasa
