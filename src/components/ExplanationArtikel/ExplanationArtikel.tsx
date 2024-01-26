interface IExplanation {
  title?: string
  description?: string
}

function ExplanationArtikel(props: IExplanation) {
  const {title, description} = props
  return (
    <div>
      <p className='font-semibold leading-[24px]'>{title}</p>
      <p className='font-400 leading-[24px]'>{description}</p>
    </div>
  )
}

export default ExplanationArtikel