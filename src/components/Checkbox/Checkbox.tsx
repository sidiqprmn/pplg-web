/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react'
import { Radio } from 'antd'

function Checkboxs({ options, onChange }) {
  const [selectedOption, setSelectedOption] = useState<string>('')

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSelectedOption(value === selectedOption ? '' : value)
  }

  useEffect(() => {
    const selectedOptionValue = options.find(
      (option) => option.value === selectedOption,
    )
    onChange(selectedOptionValue ? [selectedOptionValue] : [])
  }, [selectedOption, onChange, options])

  useEffect(() => {
    if (options.length > 0 && !selectedOption) {
      setSelectedOption(options[0].value) // Mengatur radio umum yang dipilih saat pertama kali dimuat
    }
  }, [options, selectedOption])

  return (
    <div className="flex flex-row md:flex-col">
      {options.map((option, index) => (
        <div key={option.value}>
          <Radio
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleRadioChange}
            className={`flex gap-[120px] p-4 rounded-xl bg-opacity-50 w-[238px] h-[65px] border mb-10 md:mb-4 md:w-[345px] flex-row-reverse text-[#204D85] ${
              selectedOption === option.value
                ? 'bg-[#E5F1FF] border-[#204D85]'
                : ''
            } ${index !== options.length - 1 ? 'mr-4' : ''}`}
          >
            <div className="flex gap-3 items-center md:mr-[100px]">
              <img
                src={option.logo}
                alt="Logo Opsi"
                className="w-100% h-100% object-cover rounded-full"
              />
              <span className='font-normall'>{option.label}</span>
            </div>
          </Radio>
        </div>
      ))}
    </div>
  )
}

export default Checkboxs
