interface Player {
    name: string;
    lastname: string;
    position: string;
    photo: string;
    birthday: string;
    height: number;
    weight: number;
    rightFeet: boolean;
    number: number;
}

interface Team {
    name: string;
    country: string;
    icon: string;
    stadium: string;
    Seats: number;
    players: Player[];
}

interface Teams {
    team: Team;
}

export type {
    Player,
    Team,
    Teams
}
