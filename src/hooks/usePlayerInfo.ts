import moment from "moment"
import type { PlayerWithLogo } from "@customTypes/team"

const usePlayerInfo = (player: PlayerWithLogo) => {
    const formatedBirthday = moment(player.birthday).format("DD MMMM YYYY").toUpperCase()

    return {
        formatedBirthday
    }
}

export default usePlayerInfo