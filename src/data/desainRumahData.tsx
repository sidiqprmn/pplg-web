interface DesainDataItem {
  id?: number
  image: string
  title: string
  bukuUrl: string
}

const desainRumahData: DesainDataItem[] = [
  {
    id: 1,
    image: './static/images/cards/buku1.png',
    title: 'Rumah Tipe 36',
    bukuUrl: './static/file/buku/buku1.pdf',
  },
  {
    id: 2,
    image: './static/images/cards/buku2.png',
    title: 'Rumah Tipe 40',
    bukuUrl: './static/file/buku/buku2.pdf',
  }
]

export default desainRumahData
