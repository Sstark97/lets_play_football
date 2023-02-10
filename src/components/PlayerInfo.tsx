import usePlayerInfo from "@hooks/usePlayerInfo"
import type { PlayerInfo } from "@customTypes/components"

const PlayerInfo = ({ player }: PlayerInfo) => {
    const { formatedBirthday } = usePlayerInfo(player)
  return (
    <div>{ formatedBirthday }</div>
  )
}

export default PlayerInfo