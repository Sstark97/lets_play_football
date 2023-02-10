import { PlayerWithLogo } from "./team";

interface Logo {
    image: string;
    alt: string;
}

interface TeamInfo {
    name: string, 
    country: string, 
    players: number, 
    age: number
}

interface PlayerImg extends Logo {
    icon: string
}

interface PlayerInfo {
    player: PlayerWithLogo
}

export type {
    Logo,
    TeamInfo,
    PlayerImg,
    PlayerInfo
}