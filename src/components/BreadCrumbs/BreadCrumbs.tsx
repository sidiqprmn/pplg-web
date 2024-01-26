import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface IBreadCrumbs {
  namePage: string
  colorNameOne?: string
  colorNameTwo: string
  icon: string
  position: string
}

function BreadCrumbs(props: IBreadCrumbs) {
  const router = useRouter()
  const { pathname } = router
  const { namePage, colorNameOne, colorNameTwo, icon, position } = props
  return (
    <div className={`flex absolute z-[1] ${position}`}>
      <Link href="/">
        <p className={`${colorNameOne} font-[400] md:text-[14px]`}>Beranda</p>
      </Link>
      <p className={`${icon}`}>{'>'}</p>{' '}
      <p className={`${colorNameTwo} md:text-[14px]`}>{namePage}</p>
      {pathname == '/detailartikel' && (
        <div className='flex gap-2'>
          <p className={`${icon}`}>{'>'}</p>
          <p className="text-[#14437C] font-semibold md:text-[14px]">Detail Artikel</p>
        </div>
      )}
    </div>
  )
}

export default BreadCrumbs
