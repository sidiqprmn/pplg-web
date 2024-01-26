import React, { useState } from 'react'
import { Button } from 'antd'

interface CompVideoProps {
  link: string
  title: string
  linkVideo: string
}

function CompVideo(props: CompVideoProps) {
  const { link, title, linkVideo } = props
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  }

  const hideModal = () => {
    setVisible(false)
  }

  return (
    <div className=" flex relative md:justify-center my-5">
      <div className=" w-[367px] h-[270px] absolute z-2 md:w-[335px] md:h-[253px]">
        <iframe
          src={link}
          className="w-[370px] h-[207px] rounded-[14px] mb-[15px] md:w-[337px] md:h-[189px]"
        />
        <p className="text-left font-semibold text-[16px] md:w-[335px] md:h-[48px]">
          {title}
        </p>
      </div>
      <div>
        <Button
          onClick={showModal}
          className="text-white font-bold py-2 px-4 rounded w-[370px] h-[270px] border-none shadow-none md:w-[335px] md:h-[253px]"
        ></Button>
        {visible && (
          <div className="fixed inset-0 flex items-center justify-center z-[99999] bg-black bg-opacity-80">
            <div className="bg-none rounded p-8 relative w-[1050px] h-[700px] mt-14 md:mt-52">
              <span
                onClick={hideModal}
                className="absolute top-0 right-0 py-3 px-5 text-white cursor-pointer text-[30px] md:top-[10px]"
              >
                &times;
              </span>
              <iframe
                id="video-iframe"
                src={linkVideo}
                className="w-[990px] h-[550px] mt-8 rounded-[17px] md:w-[337.738px] md:h-[189.917px]"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CompVideo
