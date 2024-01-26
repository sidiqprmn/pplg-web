import React from 'react'

interface TitleFormProps {
  title: string
}

function TitleForm(props: TitleFormProps) {
  const { title } = props
  return (
    <div className="border-l-4 border-[#FDC535] p-3 py-0 h-8 mb-[28px]">
      {/* Judul form */}
      <h1 className="font-[500] text-2xl text-[#484C57]">{title}</h1>
    </div>
  )
}

export default TitleForm
