import dynamic from 'next/dynamic'

const HomeMap = dynamic(() => import('./HomeMap'), {
  ssr: false,
})

export default HomeMap
