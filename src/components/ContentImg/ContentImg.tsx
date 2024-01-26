import classNames from 'classnames'
import React from 'react'
import style from './ContentImg.module.scss'

export default function ContentImg({ classMain, classGradient, classBgHouse }) {
  const bgHouse = {
    backgroundImage: "url('./static/images/backgrounds/house.png')",
  }
  const vectorIcon = {
    backgroundImage: "url('./static/images/vectors/vector-login.png')",
    marginTop: '138px',
  }
  const logo = {
    backgroundImage: 'url(./static/images/logo/logo-djp-white.svg)',
    marginTop: '121px',
  }
  return (
    <div>
      <div className={classMain}>
        <div className={classGradient} />
        <div
          className={classNames(
            'w-full h-[50%] bg-cover bg-center',
            style['bg-house-login'],
            classBgHouse,
          )}
          style={bgHouse}
        />
        <div className="flex flex-col justify-center items-center">
          <div className="absolute top-0">
            <div
              className="w-[523.42px] h-[45px] bg-no-repeat pt-[121px]"
              style={logo}
            />
            <div
              className="w-[482px] h-[315px] bg-no-repeat"
              style={vectorIcon}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
