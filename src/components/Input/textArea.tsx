import { Form, Input } from 'antd'

interface TextAreaInputProps {
  name:string,
  label: string,
  required?: boolean,
  message: string,
  styleTextArea:string,
  placeholder:string,
}

const { TextArea } = Input

const TextAreaInput: React.FC<TextAreaInputProps> = ({ required,styleTextArea,label, message,name,placeholder }) => {
  return (
    <Form.Item
      name={name}
      rules={[
        { required: required, message: message},
      ]} 
    >
      <div >
        <span className="flex">
          <h3 className="text-[#404258] text-[14px] font-medium">
            {label}
          </h3>
          {required && <span className="text-red-500 ml-1">*</span>}
        </span>
        <TextArea
          className={styleTextArea}
          rows={4}
          placeholder={placeholder}
        />
      </div>
    </Form.Item>
  )
}

export default TextAreaInput
