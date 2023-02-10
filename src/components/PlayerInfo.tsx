import usePlayerInfo from "@hooks/usePlayerInfo"
import type { PlayerInfo } from "@customTypes/components"

const PlayerInfo = ({ player }: PlayerInfo) => {
  const { player: formatedPlayer } = usePlayerInfo(player)

  console.log(formatedPlayer)
  return (
    <div>{ formatedPlayer.age }</div>
  )
}

export default PlayerInfo