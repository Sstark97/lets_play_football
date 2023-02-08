import Logo from "@components/Logo"
import TeamInfo from "@components/TeamInfo"
import type { Teams } from "@customTypes/containers"

const Team = ({ team }: Teams) => {
  return (
    <>
        <Logo image={team.icon} alt={team.name}/>
        <TeamInfo name={team.name} country={team.country} players={team.players?.length} age={37}/>
    </>
  )
}

export default Team