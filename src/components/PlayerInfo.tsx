import usePlayerInfo from "@hooks/usePlayerInfo"
import type { PlayerInfo } from "@customTypes/components"

const PlayerInfo = ({ player }: PlayerInfo) => {
  const { player: formatedPlayer } = usePlayerInfo(player)


  return <div>{formatedPlayer.name}</div>
}

export default PlayerInfo
