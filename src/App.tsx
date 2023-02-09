import { useState, useEffect } from "react"
import Layout from "@containers/Layout"
import Team from "@containers/Team"
import Players from "@containers/Players"
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
      <Team team={team} />
      <Players players={team?.players}/>
    </Layout>
  )
}

export default App
