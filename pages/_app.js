import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NextNProgress from 'nextjs-progressbar'
import '../styles/globals.css'
import BackToTop from '../components/BackToTop'

function MyApp({ Component, pageProps }) {
  // Router
  const router=useRouter()
  return <div>
    <NextNProgress />
    {router.pathname !== "/_error" && <Header />}
    <Component {...pageProps} />
    {router.pathname !== "/_error" && <Footer />}
    <BackToTop />
  </div>
}

export default MyApp
