import React from 'react'

interface ITitle {
  TitleContent: string
}

function TitleContentArtikel(props: ITitle) {
  const { TitleContent } = props
  return <h1 className={"text-[#484C57] text-[32px] leading-[48px] font-semibold md:text-[24px]"}>{TitleContent}</h1>
}

export default TitleContentArtikel
