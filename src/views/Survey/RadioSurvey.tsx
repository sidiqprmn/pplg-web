import React from 'react'

function RadioSurvey(props: {value: string, surveyHandler: () => any, opSuvey: string, img: string}) {
  return (
    <button
      className={`w-[96px] h-[105px] border-[1.5px] border-[#DADADA] rounded-lg py-3 px-5 cursor-pointer ${props.opSuvey === props.value && 'border-[#FDC535] shadow-[0_10px_20px_0px_rgba(253,197,53,0.1)]'}`}
      style={{}}
      onClick={() => props.surveyHandler()}
    >
      <img
        className="m-auto"
        src={props.img}
        alt=""
      />
      <p className="text-center text-[12px] leading-[15px] mt-2">{props.value}</p>
    </button>
  )
}

export default RadioSurvey
