import { useState, useEffect } from "react"
import Layout from "@containers/Layout"
import Header from "@components/Header"
import type { Teams } from "@customTypes/team"

const App = () => {
  const [team, setTeam] = useState<Teams>({} as Teams)

  useEffect(() => {
    const fetchFootball = async () => {
      const response = await fetch("../teams.json")
      const data = await response.json()

      setTeam(data)
    }

    fetchFootball()
  }, [])

  console.log(team)

  return (
    <Layout>
      <Header />
    </Layout>
  )
}

export default App
