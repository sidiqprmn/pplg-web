/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-use-before-define */
import { useState } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import { Button, Card, Col, Row, Space } from 'antd'
import classNames from 'classnames'

import { BalaiProps } from 'data/balaiData'
import style from '../HomeMap.module.scss'

const icons = {
  title: '/static/images/icons/pu.svg',
  marker: '/static/images/icons/u_map-marker-alt.svg',
  direction: '/static/images/icons/u_directions.svg',
  youtube: '/static/images/icons/fi_youtube.svg',
  facebook: '/static/images/icons/fi_facebook.svg',
  twitter: '/static/images/icons/fi_twitter.svg',
  tiktok: '/static/images/icons/tiktok.svg',
  whatsapp: '/static/images/icons/u_whatsapp.svg',
  instagram: '/static/images/icons/instagram.svg',
  youtube_hovered: '/static/images/icons/fi_youtube2.svg',
  facebook_hovered: '/static/images/icons/fi_facebook2.svg',
  twitter_hovered: '/static/images/icons/fi_twitter2.svg',
  tiktok_hovered: '/static/images/icons/tiktok2.svg',
  whatsapp_hovered: '/static/images/icons/u_whatsapp2.svg',
  instagram_hovered: '/static/images/icons/instagram2.svg',
}

interface DetailProps extends BalaiProps {
  setClicked: (v: boolean) => void
}

function Detail(props: DetailProps) {
  const { name, address, setClicked } = props

  const generateUrlGmaps = (v: string) =>
    `https://www.google.com/maps/place/${v.replaceAll(' ', '+')}`

  return (
    <Card
      title={
        <Space className="font-Lexend text-[16px] text-[#15437C] leading-[24px]">
          <div className="w-[48px] h-[48px]">
            <img src={icons.title} alt="pin" />
          </div>
          {name}
        </Space>
      }
      extra={
        <Button
          type="ghost"
          onClick={() => setClicked(false)}
          icon={<CloseOutlined className="text-[#CECECE]" />}
          className="top-[-14px]"
        />
      }
      className={classNames('rounded-xl max-w-[30rem] ', style.popoverTitle)}
    >
      <div className="mr-[-10px]">
        <Address
          label={address}
          redirect={{ icon: icons.direction, url: generateUrlGmaps(address) }}
        />
        <Sosmed {...props} />
      </div>
    </Card>
  )
}

interface AddressProps {
  label: string
  redirect?: {
    icon: string
    url: string
  }
}

function Address(props: AddressProps) {
  const { label, redirect } = props

  return (
    <Row
      justify="space-between"
      className="font-Lexend font-[12px] text-[#484C57] mb-4 max-w-md xs:max-w-none"
      gutter={[20, 10]}
    >
      <Col xs={24} className="text-[#626687]">
        Alamat:
      </Col>
      <Col xs={20} className="text-[#484C57]">
        {label}
      </Col>

      {redirect && (
        <Col>
          <a href={redirect.url} target="_blank" rel="noreferrer">
            <img
              className="inline h-[24px] pr-1"
              src={redirect.icon}
              alt="direction"
            />
          </a>
        </Col>
      )}
    </Row>
  )
}

function Sosmed(props: BalaiProps) {
  const [isHovered, setIsHovered] = useState('')
  const { facebook, youtube, tiktok, twitter, whatsapp, instagram } = props

  const isExistSosmed =
    instagram || twitter || facebook || tiktok || youtube || whatsapp

  if (isExistSosmed) {
    return (
      <Row
        justify="start"
        gutter={[20, 10]}
        className="font-Lexend font-[12px] text-[#626687]"
      >
        <Col xs={24}>Media Sosial:</Col>
        {[
          'instagram',
          'twitter',
          'facebook',
          'tiktok',
          'youtube',
          'whatsapp',
        ].map((key) => {
          if (props[key]) {
            return (
              <Col
                onMouseEnter={() => setIsHovered(key)}
                onMouseLeave={() => setIsHovered('')}
              >
                <a href={props[key]} target="_blank" rel="noreferrer">
                  <img
                    className={classNames('inline h-[40px]')}
                    src={
                      key === isHovered ? icons[`${key}_hovered`] : icons[key]
                    }
                    alt="sosmed"
                  />
                </a>
              </Col>
            )
          }
          return null
        })}
      </Row>
    )
  }
}

export default Detail
