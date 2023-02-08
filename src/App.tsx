import { useState, useEffect } from "react"
import Layout from "@containers/Layout"
import Header from "@components/Header"
import type { Team } from "@customTypes/team"
import Logo from "@components/Logo"

const App = () => {
  const [team, setTeam] = useState<Team>({} as Team)

  useEffect(() => {
    const fetchFootball = async () => {
      const response = await fetch("../teams.json")
      const data = await response.json()
      const { team: currentTeam } = data

      setTeam(currentTeam)
    }

    fetchFootball()
  }, [])

  console.log(team)

  return (
    <Layout>
      <Header />
      <Logo image={team.icon} alt={team.name}/>
    </Layout>
  )
}

export default App
