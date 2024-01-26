import { Button, Modal } from 'antd'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import style from './Card.module.scss'

interface IBuku {
  img: string
  title: string
  bukuUrl: string
}

function CardBuku(props: IBuku) {
  const { img, title, bukuUrl } = props

  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleClose = () => {
    setIsModalOpen(false)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }

  //this useState for save value width layers
  const [windowWidth, setWindowWidth] = useState<number>(0)

  // get width layers and save
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
  })
  return (
    <>
      {/* card 1 */}
      <div className=""></div>
      <div className="text-[#484C57] w-[266px] h-[556px] border-[#f7f4f4] mb-[48px] p-[17px] bg-white rounded-[14.4px] flex flex-col justify-between md:flex-col md:w-[325px] md:h-[635px] md:mb-[40px]">
        <div className="flex flex-col md:justify-center">
          <div className="min-h-[80px]">
            <img
              src={img}
              className="rounded-xl mb-[11px] md:h-[401px] md:w-[325px] md:mb-[13.8px]"
              alt=""
            />
          </div>
          <p className="font-[600] mb-6">{title}</p>
        </div>
        <div>
          <a href={bukuUrl} download>
            <Button className="text-white font-semibold bg-[#204D84] px-[20px] flex justify-center items-center w-full h-[45px] mb-4 mt-[0px] md:w-[293px] md:h-[50px] md:text-[14px]">
              Download{' '}
              <img
                className="ms-2"
                src="./static/images/icons/download/download-icon.svg"
                alt="icon-download"
              />
            </Button>
          </a>
          <Button
            className="text-[#204D84] font-semibold px-[20px] flex justify-center items-center w-full h-[45px] md:w-[293px] md:h-[50px] md:text-[14px]"
            onClick={showModal}
          >
            Lihat
            <img
              className="ms-2 mt-[2px]"
              src="./static/images/icons/eye.png"
              alt=""
            />
          </Button>
        </div>
      </div>

      <div>
        <Modal
          title={
            <div className="flex gap-[11px]">
              <img
                className="w-[48px] h-[48px] md:w-[32px] md:h-[32px]"
                src="./static/images/icons/book.png"
                alt=""
              />
              <h5 className="text-[#14437C] text-[16px] pt-1 leading-[30px] sm:text-[14px] sm:font-[500] sm:leading-[21px] sm:w-[229px]">
                {title}
              </h5>
            </div>
          }
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleClose}
          footer={false}
          className="top-10 md:w-[359px]"
          width={1000}
        >
          <hr />
          <iframe
            src={bukuUrl}
            className={classNames(
              'overflow-auto py-[20px] px-[20px] text-[#000000] w-full h-[750px] scrollbar-thin scrollbar-track-[#D9D9D9] scrollbar-thumb-[#204D84] md:h-[400px] md:w-[310px]',
              style['scrollable'],
            )}
          ></iframe>

          <hr />
          <div className="flex justify-center pt-[32px] pb-[17px] gap-[21px] md:flex md:flex-col">
            {windowWidth > 767 && (
              <Button
                className="w-[460px] h-[54px] border-[#204D84] flex justify-center items-center"
                onClick={handleClose}
              >
                Close
              </Button>
            )}
            <a href={bukuUrl} download>
              <Button className="w-[460px] h-[54px] bg-[#204D84] flex justify-center items-center text-white gap-[8px] md:w-[308px]">
                Download{' '}
                <img
                  className="w-[24px] h-[24px]"
                  src="./static/images/icons/download-white.png"
                  alt=""
                />
              </Button>
            </a>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default CardBuku
