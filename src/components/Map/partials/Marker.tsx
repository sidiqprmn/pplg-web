import { Popover } from 'antd'
import { BalaiProps } from 'data/balaiData'
import { useState } from 'react'
import Detail from 'components/Map/partials/Detail'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'

function Marker(props: BalaiProps) {
  const { coordinates } = props
  const [clicked, setClicked] = useState<boolean>(false)
  const { xs } = useBreakpoint()

  const indo = {
    minLat: -11,
    maxLat: 6,
    minLon: 95,
    maxLon: 141,
  }

  const calc = (lat: number, lon: number) => {
    const normaLizeLat =
      ((indo.maxLat - lat) / (indo.maxLat - indo.minLat)) * 29.5
    const normaLizeLon =
      ((indo.maxLon - lon) / (indo.maxLon - indo.minLon)) * 80
    return {
      normaLizeLat,
      normaLizeLon,
    }
  }

  const { normaLizeLat, normaLizeLon } = calc(coordinates[0], coordinates[1])

  return (
    <Popover
      trigger="click"
      placement={xs ? 'top' : 'right'}
      open={clicked}
      onOpenChange={setClicked}
      content={<Detail {...props} setClicked={setClicked} />}
    >
      <div
        className="absolute w-[3vw]"
        style={{
          top: `${normaLizeLat}vw`,
          right: `${normaLizeLon}vw`,
        }}
      >
        <img
          className="absolute top-[-3vw] left-[1.7vw] h-[3vw] cursor-pointer" // pointing to bottom center of marker
          src="/static/images/icons/pin.svg"
          alt="pin"
        />
      </div>
    </Popover>
  )
}

export default Marker
