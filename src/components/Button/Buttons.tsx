import React from 'react'
import { Button } from 'antd'
import { useSwiper } from 'swiper/react'

interface IButton {
  icon?: string
  className: string
}

interface IButtonComponent {
  name: string
  onClick?: () => void
  styleSlider?: React.CSSProperties // Perhatikan perubahan di sini
}

interface ICtaLoadMore {
  className?: string
  loadMore: () => void // Perhatikan perubahan di sini
}

const Buttons = {
  ButtonSlideNext: (props: IButton) => {
    const { icon, className } = props
    const swiper = useSwiper()
    return (
      <Button className={className} onClick={() => swiper.slideNext()}>
        <img src={icon} alt="" />
      </Button>
    )
  },
  ButtonSlidePrev: (props: IButton) => {
    const { icon, className } = props
    const swiper = useSwiper()
    return (
      <Button className={className} onClick={() => swiper.slidePrev()}>
        <img src={icon} alt="" />
      </Button>
    )
  },
  ButtonComponent: (props: IButtonComponent) => {
    // Perhatikan perubahan di sini
    const { name, onClick, styleSlider } = props // Perhatikan perubahan di sini
    return (
      <Button
        className="w-[496px] text-[#fff] bg-[#204D84] h-[54px] text-center font-semibold text-base leading-6"
        onClick={onClick}
        style={styleSlider}
      >
        {name}
      </Button>
    )
  },
  ButtonLoadMore: (props: ICtaLoadMore) => {
    const { loadMore, className } = props
    return (
      <Button
        className={`w-[326px] h-[54px] font-semibold leading-[25px] text-[16px] border border-[#204D84] flex items-center justify-center mx-auto my-[60px] md:my-[8px] md:w-[213px] ${className}`}
        onClick={loadMore}
      >
        Load More
      </Button>
    )
  },
}

export default Buttons
