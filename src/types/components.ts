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

export type {
    Logo,
    TeamInfo
}