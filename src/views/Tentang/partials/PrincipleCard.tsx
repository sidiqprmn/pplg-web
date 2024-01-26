import React, { ReactNode } from 'react'
interface CardProps {
  image: string
  title: string
  description: ReactNode
  zIndex?: string
  className?: string
}

function PrincipleCard(props: CardProps) {
  const { description, image, title, zIndex, className } = props
  return (
    <div
      className={`bg-[#FFFFFF] w-[350px] rounded-[20px] p-10 shadow-[10px_40px_50px_0px_rgba(229,233,246,0.16)] relative ${zIndex}`}
    >
      <img className={className} src={image} alt="" />
      <h5 className="font-semibold text-[24px] mt-[30px] ">{title}</h5>
      <p className="text-[#7D7987] leading-7">{description}</p>
    </div>
  )
}

export default PrincipleCard
