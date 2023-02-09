import { useContext } from "react"
import { FootballContext } from "@context/FootballProvider"
import Team from "@containers/Team"
import Players from "@containers/Players"

const Home = () => {
  const { team } = useContext(FootballContext)

  return (
    <>
      <Team team={team} />
      <Players players={team?.players}/>
    </>
  )
}

export default Home
