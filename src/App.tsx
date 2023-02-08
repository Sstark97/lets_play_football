import { useState, useEffect } from "react"
import Layout from "@containers/Layout"
import Header from "@components/Header"
import Team from "@containers/Team"
import type { Team as TeamType } from "@customTypes/team"

const App = () => {
  const [team, setTeam] = useState<TeamType>({} as TeamType)

  useEffect(() => {
    const fetchFootball = async () => {
      const response = await fetch("../teams.json")
      const data = await response.json()
      const { team: currentTeam } = data

      setTeam(currentTeam)
    }

    fetchFootball()
  }, [])

  return (
    <Layout>
      <Header />
      <Team team={team} />
    </Layout>
  )
}

export default App
