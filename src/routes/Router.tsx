import { Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ROUTER } from "./routes"
import Layout from "@containers/Layout"

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense>
          <Routes>
            {ROUTER.map((route) => (
              <Route key={route.route} path={route.route} element={<route.element />} />
            ))}
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}

export default Router