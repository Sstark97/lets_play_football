import { useState, useEffect, createContext } from "react"
import type { Children, Context} from "@customTypes/global"
import type { Team, PlayerWithLogo} from "@customTypes/team"

const FootballContext = createContext<Context>({} as Context)

const FootballProvider = ({ children }: Children) => {
  const { Provider } = FootballContext
  const [team, setTeam] = useState<Team>({} as Team)
  const [player, setPlayer] = useState<PlayerWithLogo>({} as PlayerWithLogo)

  useEffect(() => {
    const fetchFootball = async () => {
      const response = await fetch("/teams.json")
      const data = await response.json()
      const { team: currentTeam } = data

      setTeam(currentTeam)
    }

    fetchFootball()
  }, [])

  const handleSetPlayer = (name: string) => {
    const searchPlayer = team.players.find(player => player.name === name)

    if (searchPlayer) {
      const playerWithLogo: PlayerWithLogo = {...searchPlayer, logo: team.icon}
      setPlayer(playerWithLogo)
    }
  }

  return <Provider value={{ team, player, handleSetPlayer }}>{children}</Provider>
}

export { FootballContext, FootballProvider }