import React from 'react'

interface IExplanation {
  title: string
  desc: string
}

function Explanation(props: IExplanation) {
  const { title, desc } = props
  return (
    <div className='w-[286px]'>
      <h5 className='text-[#0B3467] text-[18px] font-medium text-center'>{title}</h5>
      <p className='w-[223px] ml-[30px] text-[#787878] text-[14px] leading-[24px] text-center'>{desc}</p>
    </div>
  )
}

export default Explanation
