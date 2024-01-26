import { Button, Modal } from 'antd'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import style from './Card.module.scss'

interface ILeaflet {
  leafletImg: string
  title: string
  imgUrl: string
}

function CardLeaflet(props: ILeaflet) {
  const { leafletImg, title, imgUrl } = props

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
      <div className="text-[#484C50] w-[367px] h-[494px] border-[#f7f4f4] my-[20px] bg-white p-5 rounded-[14.4px] md:w-[335px] md:h-[475px]">
        <img
          src={leafletImg}
          className="rounded-xl mb-[14px] w-[384px] md:w-[299px] md:h-[246px]"
          alt="logo"
        />
        <p className="mb-6 font-[600] md:mb-[26px]">{title}</p>
        <div>
          <a href={imgUrl} download>
            <Button className="text-white font-semibold bg-[#204D84] px-[20px] flex justify-center items-center w-full h-[46px] mb-4 md:w-[293px] md:h-[50px] md:text-[14px]">
              Download{' '}
              <img
                className="ms-2"
                src="./static/images/icons/download/download-icon.svg"
                alt="icon-download"
              />
            </Button>
          </a>
          <Button
            className="text-[#204D84] font-semibold px-[20px] flex justify-center items-center w-full h-[46px] md:w-[293px] md:h-[50px] md:text-[14px]"
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
            <div className="flex gap-[11px] w-[495px]">
              <img
                className="w-[48px] h-[48px] md:w-[32px] md:h-[32px]"
                src="./static/images/icons/book.png"
                alt=""
              />
              <h5 className="text-[#14437C] text-[20px] pt-1 leading-[30px] sm:text-[14px] sm:font-[500] sm:leading-[21px] sm:w-[229px]">
                {title}
              </h5>
            </div>
          }
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleClose}
          footer={false}
          className="w-[950px] h-[987px] top-10 md:w-auto "
        >
          <hr />
          <img
            src={imgUrl}
            className={classNames(
              'overflow-auto py-7 text-[#000000] w-[1000px] h-[650px] md:w-full md:h-[250px] md:py-4 md:px-2',
              style['scrollable'],
            )}
          ></img>
          <hr />
          <div className="flex justify-center pt-[32px] pb-[17px] gap-[21px] md:flex-col">
            {windowWidth > 767 && (
              <Button
                className="w-[460px] h-[54px] border- border-[#204D84] flex justify-center items-center md:w-[308px]"
                onClick={handleClose}
              >
                Close
              </Button>
            )}
            <a href={imgUrl} download>
              <Button className="w-[460px] h-[54px] border- bg-[#204D84] flex justify-center items-center text-white gap-[8px] md:w-full md:text-center md:mx-auto">
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

export default CardLeaflet
