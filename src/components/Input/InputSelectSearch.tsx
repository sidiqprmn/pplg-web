import React from 'react'
import { Select, Form } from 'antd'

const { Option } = Select

interface InputSelectSearchProps {
  name?: string
  label?: string
  classNames?: string
  messages: string
  required?: boolean
  placeholderName?: string
  placeholderStyle?: string
  onChange?: any
}

function InputSelectSearch(props: InputSelectSearchProps) {
  const {
    label,
    classNames,
    placeholderStyle,
    onChange,
    placeholderName,
    required,
    messages,
    name,
  } = props

  const handleSelectChange = (value) => {
    onChange?.(value)
  }

  const option = [
    {
      value: 'Option 1',
      label: 'Option 1',
    },
    {
      value: 'Option 2',
      label: 'Option 2',
    },
  ]

  return (
    <div>
      {' '}
      <span className="flex">
        <span className="text-[#404258]">{label}</span>
        {required && (
          <span className="text-red-500 ml-1 text-[12px] md:text-[12px]">
            *
          </span>
        )}
      </span>
      <Form.Item
        name={name}
        className="mb-[29px]"
        rules={[
          {
            required: required,
            message: messages,
          },
        ]}
      >
        <Select
          showSearch
          placeholder={
            <span className={placeholderStyle}>{placeholderName}</span>
          }
          optionFilterProp="children"
          onChange={handleSelectChange}
          className={classNames}
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }      
          options={[...option]}
        />
      </Form.Item>
    </div>
  )
}

export default InputSelectSearch
