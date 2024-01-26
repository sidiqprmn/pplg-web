import React, { useState, useEffect } from 'react'
import {
  MenuOutlined,
  DownOutlined,
  CloseOutlined,
  UpOutlined,
} from '@ant-design/icons'
import { Button, Dropdown, Menu } from 'antd'
import { useRouter } from 'next/router'
import globalRoutes from 'layouts/routes'
import Link from 'next/link'

function Navbar() {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activePanel, setActivePanel] = useState(null)

  const handlePanelClick = (panelKey) => {
    if (activePanel === panelKey) {
      setActivePanel(null)
    } else {
      setActivePanel(panelKey)
    }
  }

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const handleMenuClick = (e: any) => {
    console.log('Clicked item:', e.key)
  }

  const menu1 = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <Link href="/artikel">Artikel</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link href="/peraturan">Peraturan</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link href="/kegiatan">Kegiatan</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link href="/desainrumah">Desain Rumah</Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link href="/faq">FAQ</Link>
      </Menu.Item>
    </Menu>
  )

  const menu2 = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <Link href="/buku">Buku</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link href="/video">Video</Link>
      </Menu.Item>
    </Menu>
  )
  useEffect(() => {
    setMenuOpen(false)
  }, [router.pathname])
  return (
    <nav className="bg-[#FFFFFF] w-full px-[140px] flex justify-between py-[25px] sticky top-0 left-0 z-[5] md:z-[5] md:px-0 md:py-0 md:h-[90px] md:pt-[31px]">
      <div>
        <Link href="/">
          <img
            className="cursor-pointer w-[50px] md:w-[262px] md:h-[28px] md:pl-2"
            src="./static/favicon-new.png"
            alt=""
          />
        </Link>
      </div>

      <div className="flex list-none items-center gap-5 md:hidden">
        {globalRoutes.map(
          (menu) =>
            menu.navbar && (
              <Link href={menu.path} key={menu.path}>
                <li className="cursor-pointer text-[14px]" aria-hidden>
                  {menu.name}
                </li>
              </Link>
            ),
        )}
        <Dropdown overlay={menu1}>
          <a
            className="ant-dropdown-link flex gap-[10px] text-[14px]"
            onClick={(e) => e.preventDefault()}
          >
            Lainnya
            <DownOutlined className="text-[12px] font-bold mt-[2px]" />
          </a>
        </Dropdown>
        <Dropdown overlay={menu2}>
          <a
            className="ant-dropdown-link flex gap-[10px] text-[14px]"
            onClick={(e) => e.preventDefault()}
          >
            Media Kami
            <DownOutlined className="text-[12px] font-bold mt-[2px]" />
          </a>
        </Dropdown>
      </div>
      <div className="flex md:hidden">
        <Link href="/daftar">
          <Button
            className="text-[#204D84] me-3 px-[25px] py-[23px] flex items-center justify-center  border-[#204D84] font-semibold"
            role="button"
            tabIndex={0}
            aria-label="Daftar"
          >
            Daftar
          </Button>
        </Link>
        <Link href="/login">
          <Button
            className="text-[#204D84] bg-[#FDC535] px-[25px] py-[23px] flex items-center justify-center font-semibold gap-2 border-[#FDC535]"
            role="button"
            tabIndex={0}
            aria-label="Login"
          >
            Login
          </Button>
        </Link>
      </div>

      {/* Responsif */}
      <div className="hidden md:block md:pr-3">
        <button
          className={`hamburger ${
            menuOpen ? 'is-active' : ''
          } md:w-[24px] md:h-[24px] `}
          onClick={handleMenuToggle}
          type="button"
        >
          {menuOpen ? (
            <CloseOutlined className="text-[#204D84] z-[10] top-[37px] right-[66px] absolute" />
          ) : (
            <MenuOutlined className="text-[#204D84]" />
          )}
        </button>
      </div>
      {menuOpen && (
        <div className="menu hidden absolute top-0 bg-white md:w-[345px] md:flex md:flex-col md:h-screen md:justify-items-start md:items-start">
          <div className="mt-[31px] flex list-none items-center gap-5 flex-col w-full h-[812px] md:justify-items-start md:items-start md:pl-1  ">
            <div>
              <Link href="/">
                <img
                  className="cursor-pointer md:w-[262px] md:h-[28px] mb-[20px]"
                  src="./static/images/logo/logo-djp.svg"
                  alt=""
                />
              </Link>
            </div>
            <div className="pl-[22px] mb-[15px] text-[16px] text-[#9E9E9E]">
              Menu
            </div>
            <div className="link pl-[36px] gap-[25px] flex flex-col text-[#484C57] leading-5 font-[500]">
              {globalRoutes.map(
                (menu) =>
                  menu.navbar && (
                    <Link href={menu.path} key={menu.path}>
                      <li className="cursor-pointer" aria-hidden>
                        {menu.name}
                      </li>
                    </Link>
                  ),
              )}
              <div className="ml-[-13px] mt-[-12px]">
                <div className="bg-transparent border-none">
                  <div className="panel-with-icon w-[310px] pl-[-13px] border-none text-[16px] my-2">
                    <div
                      className={`flex items-center justify-between border-none text-4 text-[#484C57] leading-5 font-[500] h-[40px] px-3 rounded-lg ${
                        activePanel === '1' ? 'bg-[#EEF5FF] text-blue-800' : ''
                      }`}
                      onClick={() => handlePanelClick('1')}
                    >
                      <span>Informasi</span>
                      {activePanel === '1' ? <UpOutlined /> : <DownOutlined />}
                    </div>
                    {activePanel === '1' && (
                      <ul className="border-none text-[#484C57] leading-5 font-[500]">
                        <li className="pl-4 py-3 mt-2 border-none">
                          <Link href="/artikel">Artikel</Link>
                        </li>
                        <li className="pl-4 py-3 border-none">
                          <Link href="/peraturan">Peraturan</Link>
                        </li>
                        <li className="pl-4 py-3 border-none">
                          <Link href="/kegiatan">Kegiatan</Link>
                        </li>
                        <li className="pl-4 pt-3 border-none">
                          <Link href="/faq">FAQ</Link>
                        </li>
                      </ul>
                    )}
                  </div>
                  <div className="panel-with-icon w-[310px] border-none text-[16px]">
                    <div
                      className={`flex items-center justify-between border-none text-4 text-[#484C57] leading-5 font-[500]  h-[40px] px-3 rounded-lg ${
                        activePanel === '2' ? 'bg-[#EEF5FF] text-blue-800' : ''
                      }`}
                      onClick={() => handlePanelClick('2')}
                    >
                      <span>Publikasi</span>
                      {activePanel === '2' ? <UpOutlined /> : <DownOutlined />}
                    </div>
                    {activePanel === '2' && (
                      <ul className="border-none text-[#484C57] leading-5 font-[500]">
                        <li className="pl-4 py-3 mt-2 border-none">
                          <Link href="/buku">Buku</Link>
                        </li>
                        <li className="pl-4 py-3 border-none">
                          <Link href="/video">Video</Link>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <hr className="h-1 mt-[150px] m-auto w-[301px] bg-white " />
          </div>
          <div className="absolute bottom-4 flex flex-col w-full pr-3 gap-4 bg-fixed z-[10] items-center justify-center">
            <Link href="/login">
              {' '}
              <Button
                className="text-[#204D84] bg-[#FDC535] w-[301px] py-[19px] flex items-center justify-center font-semibold"
                role="button"
                tabIndex={0}
                aria-label="Login"
              >
                Login
              </Button>
            </Link>
            <Link href="/daftar">
              {' '}
              <Button
                className="text-[#204D84] w-[301px] py-[19px] flex items-center justify-center border-[#204D84] font-semibold"
                role="button"
                tabIndex={0}
                aria-label="Daftar"
              >
                Daftar
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
