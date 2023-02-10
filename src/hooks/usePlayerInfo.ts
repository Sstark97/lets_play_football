import moment from "moment"
import type { PlayerWithLogo } from "@customTypes/team"
import type { PlayerFormated, ReturnPlayerInfo} from "@customTypes/hooks"

const usePlayerInfo = (player: PlayerWithLogo): ReturnPlayerInfo => {
  const formatedBirthday = moment(player.birthday).format("DD MMMM YYYY").toUpperCase()
  const age = moment().diff(player.birthday, "years", false)
  const feet = player.rightFeet ? "right" : "left"

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {rightFeet, ...excludeFeet} = player
  const formatedPlayer: PlayerFormated = {
    ...excludeFeet,
    birthday: formatedBirthday,
    feet,
    age
  }

  return {
    player: formatedPlayer
  }
}

export default usePlayerInfo
