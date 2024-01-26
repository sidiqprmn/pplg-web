import React from 'react'
import { Card, Col, Row } from 'antd'
// import Link from 'antd/es/typography/Link'
function CardHome() {
  return (
    <div className="px-[100px]">
      {/* <div className="site-card-wrapper items-center"> */}
      <Row gutter={8} className="items-center justify-center">
        <Col span={5}>
          <Card
            bordered={false}
            className="text-cyan-900"
            cover={<img alt="example" src="./static/images/logo/group1.png" />}
          >
            Informasi
          </Card>
        </Col>
        <Col span={5}>
          <Card
            bordered={false}
            className=" text-cyan-900"
            cover={<img alt="example" src="./static/images/logo/group2.png" />}
          >
            Perencanaan
          </Card>
        </Col>
        <Col span={5}>
          <Card
            bordered={false}
            className=" text-cyan-900"
            cover={<img alt="example" src="./static/images/logo/group3.png" />}
          >
            Bantuan Teknis
          </Card>
        </Col>
      </Row>
      {/* </div> */}
    </div>
  )
}

export default CardHome
