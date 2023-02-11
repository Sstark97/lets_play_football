import { useLocation } from "react-router-dom"

const Footer = () => {
  const location = useLocation()
  const position = location.pathname === "/player" ? "absolute bottom-0" : ""

  return (
    <footer className={`w-screen flex justify-center text-sm text-paris opacity-90 py-6 lg:p-0 lg:pb-6 lg:absolute lg:bottom-0 ${position}`}>Me gusta el fútbol • 2023 ©</footer>
  )
}

export default Footer