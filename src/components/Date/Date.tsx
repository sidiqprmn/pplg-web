import classNames from 'classnames'
import React from 'react'
import style from './Date.module.scss'

function Date() {
  return (
    <div className='relative flex'>
      <input
        className={classNames(
          'py-[11px] px-[16px] border rounded-lg w-[208px] h-[46px] outline-none md:w-[335px] ',
          style['date'],
        )}
        type="date"
        name=""
        id=""
      />
      <img className='absolute right-3 top-3 w-[20px] h-[22px] cursor-pointer' src="./static/images/icons/calendar-2.png" alt="" />
    </div>
  )
}

export default Date
