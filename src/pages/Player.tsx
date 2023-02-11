import PlayerImg from "@components/PlayerImg";
import PlayerHeader from "@components/PlayerHeader";
import usePlayer from "@hooks/usePlayer";
import PlayerInfo from "@components/PlayerInfo";

const Player = () => {
  const { player } = usePlayer()

  console.log(player)

  return (
    player ? <div className="bg-paris pb-8 lg:lg:w-3/4">
      <PlayerImg image={player.photo} icon={player.logo} alt={player.name} />
      <PlayerHeader player={player} />
      <PlayerInfo player={player} />
    </div> : null
  )
}

export default Player
