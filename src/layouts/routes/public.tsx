import dynamic from 'next/dynamic'

const PublicContainer = dynamic(() => import('layouts/containers/Public'))

const publicRoutes = [
  {
    path: '/',
    name: 'Home',
    layout: PublicContainer,
    navbar: false,
    exact: true,
  },
  {
    path: '/tentang',
    name: 'About',
    layout: PublicContainer,
    navbar: true,
    exact: true,
  },
  {
    path: '/alurlayanan',
    name: 'Ngatau apa',
    layout: PublicContainer,
    navbar: true,
    exact: true,
  },
  {
    path: '/peraturan',
    name: 'Materi(?)',
    layout: PublicContainer,
    navbar: false,
    exact: true,
  },
  {
    path: '/faq',
    name: 'FAQ',
    layout: PublicContainer,
    navbar: false,
    exact: true,
  },
  {
    path: '/artikel',
    name: 'Artikel',
    layout: PublicContainer,
    navbar: false,
    exact: true,
  },
  {
    path: '/detailartikel',
    name: 'Detail Artikel',
    layout: PublicContainer,
    navbar: false,
    exact: true,
  },
  {
    path: '/kegiatan',
    name: 'Kegiatan kami',
    layout: PublicContainer,
    navbar: false,
    exact: true,
  },
  {
    path: '/desainrumah',
    name: 'asdadf',
    layout: PublicContainer,
    navbar: false,
    exact: true,
  },
  {
    path: '/buku',
    name: 'asdadsd',
    layout: PublicContainer,
    navbar: false,
    exact: true,
  },
  {
    path: '/video',
    name: 'video',
    layout: PublicContainer,
    navbar: false,
    exact: true,
  },
  {
    path: '/leaflet',
    name: 'leaflet',
    layout: PublicContainer,
    navbar: false,
    exact: true,
  },
  {
    path: '/survey',
    name: 'Survey',
    layout: PublicContainer,
    navbar: false,
    exact: true,
  },
]

export default publicRoutes
