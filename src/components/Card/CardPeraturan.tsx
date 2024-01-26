import { Button, Modal } from 'antd'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import style from './Card.module.scss'
import Link from 'next/link'

interface IPeraturan {
  title: string
  downloaded: number
  pdfUrl: string
}

function CardPeraturan(props: IPeraturan) {
  const { title, downloaded, pdfUrl } = props

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
    <div className="flex justify-between py-[24px] px-[28px] bg-[#FFF] shadow-[0_10px_60px_0px_rgba(32, 77, 132, 0.1)] rounded-[20px] md:flex-col ">
      <div className="w-[80%] md:w-full">
        <h5 className="text-[#404258] text-[20px] font-semibold md:text-[16px] md:leading-[24px]">
          {title}
        </h5>
        <div className="flex justify-between w-[250px] text-[#626687] text-[14px]">
          <p>{downloaded} kali di download</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse md:gap-x-[16px] md:mt-[40px]">
        <a href={pdfUrl} download>
        <Button className="text-white font-semibold bg-[#204D84] px-[20px] mb-5 flex justify-center items-center h-[45px] md:w-[143px] md:h-[33px] md:text-[14px]">
          Download
          <img
            className="ms-2"
            src="./static/images/icons/download.png"
            alt=""
          />
        </Button>
        </a>
        <Button
          className="text-[#204D84] font-semibold px-[20px] flex justify-center items-center h-[45px] md:w-[143px] md:h-[33px] md:text-[14px]"
          onClick={showModal}
        >
          Lihat
          <img
            className="ms-2 mt-[2px]"
            src="./static/images/icons/eye.png"
            alt=""
          />
        </Button>
        <Modal
          title={
            <div className="flex gap-[11px] w-[755px]">
              <img
                className="w-[48px] h-[48px] md:w-[32px] md:h-[32px]"
                src="./static/images/icons/book.png"
                alt=""
              />
              <h5 className="text-[#14437C] text-[20px] leading-[30px] sm:text-[14px] sm:font-[500] sm:leading-[21px] sm:w-[229px]">
                {title}
              </h5>
            </div>
          }
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleClose}
          footer={false}
          className="w-[900px] top-10 md:w-auto "
        >
          <hr />
          <iframe
            src={pdfUrl}
            className={classNames(
              'overflow-auto py-[20px] px-[20px] text-[#000000] w-full h-[800px] scrollbar-thin scrollbar-track-[#D9D9D9] scrollbar-thumb-[#204D84] md:h-[60vh]',
              style['scrollable'],
            )}
          ></iframe>
          <hr />
          <div className="flex justify-center pt-[32px] pb-[17px] gap-[21px]">
            {windowWidth > 767 && (
              <Button
                className="w-[400px] h-[50px] border-[#204D84] flex justify-center items-center"
                onClick={handleClose}
              >
                Close
              </Button>
            )}
            <a href={pdfUrl} download>
            <Button className="w-[400px] h-[50px] bg-[#204D84] flex justify-center items-center text-white gap-[8px] md:w-[303px] md:text-center">
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
    </div>
  )
}

export default CardPeraturan
