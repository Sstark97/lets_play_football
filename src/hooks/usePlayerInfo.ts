import moment from "moment"
import type { PlayerWithLogo } from "@customTypes/team"
import type { PlayerFormated, ReturnPlayerInfo} from "@customTypes/hooks"

const usePlayerInfo = (player: PlayerWithLogo): ReturnPlayerInfo => {
  const formatedBirthday = moment(player.birthday).format("DD MMMM YYYY").toUpperCase()
  const age = moment().diff(player.birthday, "years", false)
  const feet = player.rightFeet ? "right" : "left"

  const formatedPlayer: PlayerFormated = {
    birthday: formatedBirthday,
    age,
    height: `${player.height} CM`,
    weight: `${player.weight} KG`,
    feet: feet.toUpperCase(),
  }

  return {
    player: formatedPlayer
  }
}

export default usePlayerInfo
