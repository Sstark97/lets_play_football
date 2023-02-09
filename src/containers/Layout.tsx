import Header from "@containers/Header"
import Footer from "@components/Footer"
import type { Children } from "@customTypes/global"

const Layout = ({ children }: Children) => {
  return (
    <div className="font-sf-pro">
      <Header />
      { children }
      <Footer />
    </div>
  )
}

export default Layout