import React from 'react'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { Input, Form } from 'antd'

function Password({
  name,
  placeholder,
  label,
  classNamePass,
  required,
  messages,
  value,
  onChange,
}) {
  return (
    <div>
      <span className="flex flex-col">
        <span className="mb-3">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </span>
        <Form.Item
          className="mb-6"
          name={name}
          rules={[{ required, message: messages }]}
        >
          <Input.Password
            className={classNamePass}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            // eslint-disable-next-line react/no-unstable-nested-components
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
      </span>
    </div>
  )
}

export default Password
