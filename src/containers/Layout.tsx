import Header from "@containers/Header"
import Footer from "@components/Footer"
import type { Children } from "@customTypes/global"

const Layout = ({ children }: Children) => {
  return (
    <div>
      <Header />
      { children }
      <Footer />
    </div>
  )
}

export default Layout