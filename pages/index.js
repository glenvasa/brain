import Head from 'next/head'
import { baseUrl, fetchApi } from '../utils/fetchApi'
import ArtistSearch from './search'


export default function Home() {



  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Brain</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {/* <ArtistSearch/> */}
      </main>

      
    </div>
  )
}


