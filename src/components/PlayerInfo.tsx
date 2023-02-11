import { v4 as uuidv4 } from "uuid"
import usePlayer from "@hooks/usePlayer"
import usePlayerInfo from "@hooks/usePlayerInfo"

const PlayerInfo = () => {
  const { player } = usePlayer()
  const { player: formatedPlayer } = usePlayerInfo(player)
  const playerData = Object.entries(formatedPlayer)

  console.log(playerData)

  return (
    <div className="pt-4">
      <p className="text-lg text-white font-medium opacity-90">PROFILE</p>
      <div className="w-[60%] flex flex-col mt-3">
        {
          playerData.map((info, index) => (
            <div key={uuidv4()} className="w-[95%] flex justify-between text-white mt-2">
              <div className="w-[50%] text-right">{info[0].toUpperCase()}</div>
              <div className={`${ index !== 0 ? "w-[40%]" : ""} text-left opacity-70`}>{info[1]}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default PlayerInfo
