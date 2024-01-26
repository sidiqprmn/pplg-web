import React from 'react'
// import Slider from 'react-slick'
import { Card, Slider } from 'antd'

const { Meta } = Card
function SampleNextArrow(props) {
  const { className, style } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'circle',
        background: 'blue',
        // position: 'absolute',
        // zIndex: 99999,
      }}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'blue',
        // position: 'absolute',
      }}
    />
  )
}
function SliderHome() {
  const settings: any = {
    className: 'center',
    dots: true,
    infinite: true,
    centerPadding: '30px',
    slidesToShow: 4,
    // swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange(index: number) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`,
      )
    },
  }
  return (
    <div className="">
      <Slider {...settings}>
        <div className="flex-col">
          <Card
            hoverable
            style={{ width: 240, height: 240 }}
            cover={
              <img alt="example" src="./static/images/sliderhome/image1.png" />
            }
          >
            <Meta
              title="Rumah Produktif Bagi Masyarakat Tanpa Pekerjaan"
              description="www.instagram.com"
            />
          </Card>
        </div>
        <div>
          <Card
            hoverable
            style={{ width: 240, height: 240 }}
            cover={
              <img alt="example" src="./static/images/sliderhome/image2.png" />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </div>
        <div>
          <Card
            hoverable
            style={{ width: 240, height: 240 }}
            cover={
              <img alt="example" src="./static/images/sliderhome/image3.png" />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </div>
        <div>
          <Card
            hoverable
            style={{ width: 240, height: 240 }}
            cover={
              <img alt="example" src="./static/images/sliderhome/image4.png" />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </div>
        <div>
          <Card
            hoverable
            style={{ width: 240, height: 240 }}
            cover={
              <img alt="example" src="./static/images/sliderhome/image3.png" />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </div>
      </Slider>
    </div>
  )
}
export default SliderHome
