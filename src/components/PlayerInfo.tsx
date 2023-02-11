import usePlayer from "@hooks/usePlayer"
import usePlayerInfo from "@hooks/usePlayerInfo"

const PlayerInfo = () => {
  const { player } = usePlayer()
  const { player: formatedPlayer } = usePlayerInfo(player)


  return <div>{formatedPlayer.name}</div>
}

export default PlayerInfo
