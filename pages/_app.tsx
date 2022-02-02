import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Davies Esiro: Full stack Developer.</title>
        <meta
          name="description"
          content="My name is Davies Esiro. I build responsive, scalable and high performance products. I Bring your dream
 project to life"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
