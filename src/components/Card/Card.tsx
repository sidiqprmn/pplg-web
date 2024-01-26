import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button, Modal } from 'antd'

interface ICard {
  img: string
  title: string
  text?: String
}

interface Modal extends ICard {
  contentModal: string,
}

interface Artikel extends ICard {
  date: string
}

const Cards = {
  // this component card use for Alur layanan Page
  CardAlurLayanan: (props: ICard) => {
    const { img, title, text } = props
    return (
      <div className="border-dashed border-[#626687] border-[1px] rounded-xl flex  flex-col w-[420px] px-[25px] py-[20px] h-[245px] md:w-[302.85px] md:h-[200px] md:py-[14px] md:px-[21px] md:rounded-lg">
        <img className="w-[70px] mx-auto md:w-[44px]" src={img} alt="" />
        <h5 className="font-semibold text-[20px] text-[#484C57] leading-[25px] text-center md:text-[16px] md:leading-[24px]">
          {title}
        </h5>
        <p className="text-center leading-[25px] text-[#696D8E] text-[14px] md:text-[12px] md:leading-[18px]">
          {text}
        </p>
      </div>
    )
  },
  CardHome: (props: Modal) => {
    const { img, title,contentModal } = props
    const [isModalOpen, setIsModalOpen] = useState(false)

    const showModal = () => {
      setIsModalOpen(true)
    }

    const handleOk = () => {
      setIsModalOpen(false)
    }

    const handleCancel = () => {
      setIsModalOpen(false)
    }
    return (
      <>
        <div
          className="w-[366px] text-[#484C57] md:w-[335.08px] h-[356px] rounded-[20px] py-[40px] flex flex-col justify-center items-center cursor-pointer hover:shadow-[0_10px_60px_0px_rgba(32,77,132,0.1)] md:shadow-[0_10px_60px_0px_rgba(32,77,132,0.1)] hover:text-[#14437C]"
          onClick={showModal}
        >
          <img className="w-[]" src={img} alt="" />
          <h5 className="text-[24px] font-semibold leading-[36px] mt-[32px] md:text-[18px]">
            {title}
          </h5>
        </div>
        <Modal
          title={
            <div className="border-b-[1px] pb-4">
              <h5>{title}</h5>
            </div>
          }
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={false}
        >
          <div className="py-3">
            <p className='text-[#626687]'>{contentModal}</p>
          </div>
        </Modal>
      </>
    )
  },
  CardArtikel: (props: Artikel) => {
    const { img, title, text, date } = props

    // this useState for save value width layers
    const [windowWidth, setWindowWidth] = useState<number>(0)
    //
    useEffect(() => {
      // get width layers and save
      const handleResize = () => {
        setWindowWidth(window.innerWidth)
      }
      handleResize()
      window.addEventListener('resize', handleResize)

      const description = document.getElementsByTagName('p')
      const maxText = window.innerWidth > 767 ? 200 : 50
      for (let i = 0; i < description.length; i++) {
        const text = description[i].textContent
        if (text.length > maxText) {
          description[i].textContent = `${text.substring(0, maxText)}...`
        }
      }
      
      const Title = document.getElementsByTagName('h5')
      const maxTitle = window.innerWidth > 767 ? 200 : 63
      for (let i = 0; i <Title.length; i++) {
        const title =Title[i].textContent
        if (title.length > maxTitle) {
         Title[i].textContent = `${title.substring(0, maxTitle)}...`
        }
      }
    })

    return (
      <Link href="/detailartikel">
        <div className="w-[962px] h-[282px] bg-[#ffffff] p-4 flex rounded-[20px] md:w-[335px] md:h-[395px] md:flex-col">
          <div>
            <img
              className="w-[373px] h-[250px] rounded-xl md:w-[301px] md:h-[201.87px] md:rounded-xl"
              src={img}
              alt=""
            />
            
          </div>
          <div className="w-[521px] p-4 md:w-[301px] md:px-0">
            <h5 className="text-[#3B525C] text-[24px] leading-9 font-semibold md:text-[16px] md:leading-[24px]">
              {title}
            </h5>
            <span className="text-[#626687] text-[14px] leading-[21px] md:leading-[20px] font-[300]">
              {date}
            </span>

            <p className="text-[#626687] text-[14px] leading-[24px] mt-5 font-[300] md:mt-4">
              {text}
            </p>
          </div>
        </div>
      </Link>
    )
  },
}

export default Cards
            {/* {windowWidth > 767 ? (
            <h6 className="text-[#626687] font-normal text-[14px] leading-[24px] mt-2">
              {text}
            </h6>
          ) : (
            <p className="text-[#626687] text-[14px] leading-[24px] mt-0 font-[300]">
              {text}
            </p>
          )} */}
