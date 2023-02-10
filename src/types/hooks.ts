import type { PlayerWithLogo } from "./team"

interface PlayerFormated extends Omit<PlayerWithLogo, "rightFeet"> {
  age: number,
  feet: string
}

interface ReturnPlayerInfo {
    player: PlayerFormated
}

export type {
    PlayerFormated,
    ReturnPlayerInfo
}