import moment from "moment"
import type { PlayerWithLogo } from "@customTypes/team"

const usePlayerInfo = (player: PlayerWithLogo) => {
  const formatedBirthday = moment(player.birthday).format("DD MMMM YYYY").toUpperCase()
  const age = moment().diff(player.birthday, "years", false)
  const feet = player.rightFeet ? "right" : "left"
  const formatedPlayer = {
    ...player,
    birthday: formatedBirthday,
    feet: feet,
    age
  }

  return {
    player: formatedPlayer
  }
}

export default usePlayerInfo
