import type { PlayerWithLogo } from "./team"

interface PlayerFormated extends Pick<PlayerWithLogo, "birthday"> {
  age: number,
  feet: string,
  height: string,
  weight: string
}

interface ReturnPlayerInfo {
    player: PlayerFormated
}

export type {
    PlayerFormated,
    ReturnPlayerInfo
}