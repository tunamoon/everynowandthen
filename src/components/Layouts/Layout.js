import { Navbar } from '../NavBar.js'
import { Footer } from '../Footer.js'
//standard layout of each page 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}