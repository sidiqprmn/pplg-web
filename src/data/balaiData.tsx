export interface BalaiProps {
  name: string
  province: string[]
  address: string
  coordinates: [number, number]
  instagram: string
  twitter: string
  facebook: string
  youtube: string
  tiktok: string
  whatsapp: string
}

const balaiData: BalaiProps[] = [
  {
    name: 'Balai Pelaksana Penyediaan Perumahan Sumatera II',
    province: ['SUMATERA UTARA'],
    address:
      'Jl. Suluh No.99, Sidorejo Hilir, Kec. Medan Tembung, Kota Medan, Sumatera Utara 20222',
    coordinates: [3.611257603904055, 98.70246366697809],
    instagram: 'https://www.instagram.com/pupr_perumahan_sumatera2/?hl=id',
    twitter: 'https://twitter.com/balaip2p_sum2',
    facebook:
      'https://www.facebook.com/profile.php?id=100078336818388&_rdc=1&_rdr',
    youtube: 'https://www.youtube.com/@balaipelaksanapenyediaanpe110',
    tiktok: '',
    whatsapp: 'https://wa.me/628116355221',
  },
  {
    name: 'Balai Pelaksana Penyediaan Perumahan Jawa III',
    province: ['JAWA TENGAH', 'DI YOGYAKARTA'],
    address:
      'Jl. Laksda Adisucipto No.165, Papringan, Caturtunggal, Kec. Depok, Kab. Sleman, DI Yogyakarta 55281',
    coordinates: [-7.782514845022507, 110.39458599999999],
    instagram:
      'https://instagram.com/pupr_perumahan_jawa3?igshid=NTc4MTIwNjQ2YQ==',
    twitter: 'https://twitter.com/BalaiP2PJawa3?s=20',
    facebook:
      'https://web.facebook.com/people/Balai-Pelaksana-Penyediaan-Perumahan-Jawa-III/100063909738974/?_rdc=1&_rdr',
    youtube: 'https://www.youtube.com/@balaip2pjawa3',
    tiktok: '',
    whatsapp: 'https://wa.me/6282137191145',
  },
  {
    name: 'Balai Pelaksana Penyediaan Perumahan Jawa II',
    province: ['JAWA BARAT'],
    address:
      'Jl. Lengkong Besar No.10, Cikawao, Kec. Lengkong, Kota Bandung, Jawa Barat 40261',
    coordinates: [-6.924065641303365, 107.61143625355231],
    instagram: 'https://www.instagram.com/pupr_perumahan_jawa2/',
    twitter: '',
    facebook: 'https://www.facebook.com/profile.php?id=100064336016077',
    youtube: '',
    tiktok: '',
    whatsapp: 'https://wa.me/6287770914303',
  },
  {
    name: 'Balai Pelaksana Penyediaan Perumahan Sumatera III',
    province: ['RIAU', 'KEPULAUAN RIAU', 'SUMATERA BARAT'],
    address:
      'Jl. Diponegoro No.45, Cinta Raja, Kec. Sail, Kota Pekanbaru, Riau 28131',
    coordinates: [0.5122400847128868, 101.45220780931103],
    instagram: 'https://www.instagram.com/pupr_perumahan_sumatera3/',
    twitter: 'https://twitter.com/bp2p_sumatera3',
    facebook: 'https://www.facebook.com/pupr.perumahan.sumatera3',
    youtube: 'https://www.youtube.com/@balaip2psumateraiii692 ',
    tiktok: '',
    whatsapp: 'https://wa.me/6282268698485',
  },
  {
    name: 'Balai Pelaksana Penyediaan Perumahan Kalimantan I',
    province: ['KALIMANTAN BARAT', 'KALIMANTAN TENGAH'],
    address:
      'Jl. Imam Bonjol No.116, Benua Melayu Darat, Kec. Pontianak Selatan, Kota Pontianak, Kalimantan Barat 78122',
    coordinates: [-0.043804171114262574, 109.3512521958211],
    instagram:
      'https://instagram.com/pupr_perumahan_kalimantan1?igshid=NTc4MTIwNjQ2YQ==',
    twitter:
      'https://twitter.com/bp2pkalimantan1?s=11&t=zwUkxlJxcEBaTSTFldV-vg',
    facebook: 'https://www.facebook.com/BP2PKalimantanI/',
    youtube:
      'https://youtube.com/channel/UC9L1XziTWuuc7hUU2ynv2Yg?sub_confirmation=1',
    tiktok: 'https://www.tiktok.com/@pupr_perumahan_k1?_t=8cYBcl4WjrO&_r=1',
    whatsapp: 'https://wa.me/6285248894217',
  },
  {
    name: 'Balai Pelaksana Penyediaan Perumahan Jawa IV',
    province: ['JAWA TIMUR', 'BALI'],
    address:
      'Jl. Gayung Kebonsari No.50, Ketintang, Kec. Gayungan, Kota Surabaya, Jawa Timur 60235',
    coordinates: [-7.329330769151337, 112.7256838958856],
    instagram: 'https://www.instagram.com/pupr_perumahan_jawa4/?hl=id',
    twitter: 'https://twitter.com/puprkrsjawa4?s=20',
    facebook: '',
    youtube: '',
    tiktok: 'https://www.tiktok.com/@puprkrsjawa4?_t=8cROFOdJFXr&_r=1',
    whatsapp: 'https://wa.me/6281249640574',
  },
  {
    name: 'Balai Pelaksana Penyediaan Perumahan Jawa I',
    province: ['BANTEN', 'DKI JAKARTA'],
    address:
      'Gedung Wisma Karya,  Jl. Wijaya I No.59, Petogogan, Kec. Kby. Baru, Kota Jakarta Selatan, DKI Jakarta 12170',
    coordinates: [-6.244830967874514, 106.80930265354377],
    instagram: 'https://www.instagram.com/pupr_perumahan_jawa1/',
    twitter: '',
    facebook: 'https://www.facebook.com/BP2PJAWA1',
    youtube: 'https://www.youtube.com/@pupr_perumahan_jawa1',
    tiktok: '',
    whatsapp: '',
  },
  {
    name: 'Balai Pelaksana Penyediaan Perumahan Nusa Tenggara I',
    province: ['NUSA TENGGARA BARAT'],
    address:
      'Jl. Dr. Sudjono No.369,  Jempong Baru, Kec. Sekarbela, Kota Mataram, Nusa Tenggara Barat 83361',
    coordinates: [-8.61946607610001, 116.09456722474006],
    instagram: 'https://www.instagram.com/pupr_perumahan_nt1/',
    twitter: 'https://twitter.com/balaip2pnt1?s=20',
    facebook: 'https://www.facebook.com/bp2p.nt1?mibextid=ZbWKwL',
    youtube: 'https://youtube.com/@pupr_perumahan_nt1',
    tiktok: '',
    whatsapp: '',
  },
  {
    name: 'Balai Pelaksana Penyediaan Perumahan Kalimantan II',
    province: ['KALIMANTAN SELATAN', 'KALIMANTAN TIMUR', 'KALIMANTAN UTARA'],
    address:
      'Jl.Cendana Komplek PDAM No 167, Kec. Sungai Kunjang, Kota Samarinda, Kalimantan Timur 75243',
    coordinates: [-0.4999357426403121, 117.11959399510319],
    instagram: '',
    twitter: '',
    facebook: '',
    youtube: '',
    tiktok: '',
    whatsapp: '',
  },
  {
    name: 'Balai Pelaksana Penyediaan Perumahan Sulawesi III',
    province: ['SULAWESI SELATAN', 'SULAWESI TENGGARA'],
    address:
      'Jl. Penjernihan Raya No.22, Karampuang, Kec. Panakkukang, Kota Makassar, Sulawesi Selatan 90231',
    coordinates: [-5.149162652298234, 119.45480273969899],
    instagram:
      'https://instagram.com/pupr_perumahan_sulawesi3?igshid=MzRlODBiNWFlZA==',
    twitter: '',
    facebook:
      'https://www.facebook.com/profile.php?id=100064082383378&mibextid=LQQJ4d',
    youtube: '',
    tiktok: '',
    whatsapp: 'https://wa.me/6283879892863',
  },
]

export default balaiData
