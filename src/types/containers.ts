import type { Team, Player } from "./team";

interface Teams {
    team: Team;
}

interface Players {
    players: Player[]
}

export type {
    Teams,
    Players
}