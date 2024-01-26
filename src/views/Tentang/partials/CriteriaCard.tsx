import React, { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  title: string
  image: string
}

function CriteriaCard(props: CardProps) {
  const { children, image, title } = props
  return (
    <div>
      <img src={image} alt="" />
      <h5 className="font-semibold text-[24px] text-white my-[28px]">
        {title}
      </h5>
      {children}
    </div>
  )
}

export default CriteriaCard
