import React from 'react'
import classNames from 'classnames'
import balaiData from 'data/balaiData'
import Marker from 'components/Map/partials/Marker'
import style from './HomeMap.module.scss'
import mapIndo from './partials/MapIndo'

function HomeMap() {
  return (
    <section className="px-[10vw] py-[5vw] bg-[#14437C]">
      <h1 className="text-[#FFFFFF] text-[44px] leading-[66px] md:text-[20px] md:leading-[30px]">
        Lokasi <span className="text-[#FDC535]">Konsultasi</span>
      </h1>
      <div
        className={classNames(
          'w-[80vw] h-[29.5vw] bg-no-repeat bg-cover relative',
          style.mapIndo,
        )}
      >
        {mapIndo()}
        {balaiData.map((row) => (
          <Marker {...row} />
        ))}
      </div>
    </section>
  )
}

export default HomeMap
