import React from 'react'

interface IFlow {
  number: string
  icon: string
}

function Flow(props: IFlow) {
  const { number, icon } = props
  return (
    <div className="flex flex-col items-center justify-center z-10">
      <h5 className=" text-[24px] p-4 font-medium mb-5 border-[#0B3467] border-2 rounded-[50%] bg-white">
        {' '}
        <img src={icon} alt="" />
      </h5>
    </div>
  )
}

export default Flow
