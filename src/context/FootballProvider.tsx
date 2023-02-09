import { useState, useEffect, createContext } from "react"
import type { Children } from "@customTypes/global"
import type { Team, Teams } from "@customTypes/team"

const FootballContext = createContext<Teams>({} as Teams)

const FootballProvider = ({ children }: Children) => {
  const { Provider } = FootballContext
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

  return <Provider value={{ team }}>{children}</Provider>
}

export { FootballContext, FootballProvider }