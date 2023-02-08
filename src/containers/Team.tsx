import Logo from "@components/Logo"
import TeamInfo from "@components/TeamInfo"
import type { Teams } from "@customTypes/containers"

const Team = ({ team }: Teams) => {
  return (
    <div className="flex flex-col bg-paris lg:flex-row lg:pb-10 lg:mb-4">
        <Logo image={team.icon} alt={team.name}/>
        <TeamInfo name={team.name} country={team.country} players={team.players?.length} age={37}/>
    </div>
  )
}

export default Team