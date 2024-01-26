import React, { useState } from 'react'
import { Select, Space, Form } from 'antd'
import classNames from 'classnames'
import { SizeType } from 'antd/lib/config-provider/SizeContext'

const { Option } = Select

function InputSelect({
  options,
  label,
  required,
  className,
  messages,
  placeholder,
  onChange,
}) {
  const [size, setSize] = useState<SizeType>('large')
  const labelClasses = classNames(
    'text-[14px]',
    'leading-[21px]',
    'font-[500]',
    'text-[#484C57]',
    { 'mb-2': !required },
  )

  const handleSelectChange = (value) => {
    if (onChange) {
      onChange(value)
    }
  }

  return (
    <div className="my-[2px]">
      <Space direction="vertical" className="w-full mb-[3px]">
        <label className={labelClasses} htmlFor="select">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}{' '}
        </label>
        <Form.Item
          name="select"
          rules={[{ required: true, message: messages }]}
          className="select-container"
        >
          <Select
            size={size}
            placeholder={<span className={className}>{placeholder}</span>}
            className={className}
            onChange={handleSelectChange}
          >
            {options.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Space>
    </div>
  )
}

export default InputSelect
