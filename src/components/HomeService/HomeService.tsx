import classNames from 'classnames'
import CustomerServ from 'components/LiveChat/LiveChat'
import React, { useState } from 'react'
import style from './HomeService.module.scss'
import Link from 'next/link'

function HomeService() {
  const [showPopup, setShowPopup] = useState(false)
  const togglePopup = () => {
    setShowPopup(!showPopup)
  }

  const closePopup = () => {
    setShowPopup(false)
  }
  return (
    <div>
      <div
        className={classNames(
          'w-[120px] h-[120px] fixed bottom-20 right-[6px] z-[5] flex',
          style['survey'],
        )}
      >
        <Link href="/survey">
          <img
            className="cursor-pointer"
            src="./static/images/icons/icon-survey.png"
            alt=""
          />
        </Link>
        <div
          className={classNames(
            'bg-[#FFF8E7] absolute top-9 right-24 w-[220px] h-[33px] justify-center items-center rounded-[40px]',
            style['title-survey'],
          )}
        >
          <img
            className="w-[20px] h-[20px]"
            src="./static/images/icons/person.svg"
            alt=""
          />
          <p className="text-[14px] mt-3 ms-2 text-[#C18C02] font-semibold">
            Survei Kepuasan Publik
          </p>
        </div>
      </div>
      <div
        className={classNames(
          'h-[125px] w-[125px] fixed bottom-0 right-[4px] z-[5]',
          style['home-service'],
        )}
      >
        <button onClick={togglePopup}>
          <img className='w-[125px] h-[125px]' src="./static/images/icons/service-buble.svg" alt="" srcSet="" />
        </button>
        <div
          className={classNames(
            'bg-[#F2F6FF] absolute top-10 right-[100px] w-[120px] h-[33px] justify-center items-center rounded-[40px]',
            style['title-live-chat'],
          )}
        >
          <img
            className="w-[20px] h-[20px]"
            src="./static/images/icons/headset.svg"
            alt=""
          />
          <p className="text-[14px] mt-3 ms-2 text-[#223468] font-semibold">
            Live Chat
          </p>
        </div>
        {showPopup && <CustomerServ onClose={closePopup} />}
      </div>
    </div>
  )
}

export default HomeService
