import { v4 as uuidv4 } from "uuid"
import Player from "@components/Player"
import type { Players } from "@customTypes/containers"

const Players = ({ players }: Players) => {
  return players ? (
    <div className="flex flex-wrap">
      {players.map((player) => (
        <Player key={uuidv4()} {...player} />
      ))}
    </div>
  ) : null
}

export default Players
