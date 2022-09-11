import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Navbar />
  <Component {...pageProps} /></>
}

export default MyApp


/* https://www.youtube.com/watch?v=zokKTsRx7QA 49:28 11/9/22 */