import PlayerImg from "@components/PlayerImg";
import PlayerInfo from "@components/PlayerInfo";
import usePlayer from "@hooks/usePlayer";

const Player = () => {
  const { player } = usePlayer()

  console.log(player)

  return (
    player ? <div>
      <PlayerImg image={player.photo} icon={player.logo} alt={player.name} />
      <PlayerInfo player={player} />
    </div> : null
  )
}

export default Player
