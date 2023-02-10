import { ReactNode } from "react";
import { PlayerWithLogo, Team } from "@customTypes/team";

interface Children {
    children: ReactNode
}

interface Routes {
    route: string
    element: React.LazyExoticComponent<React.ComponentType<unknown>>
}

interface Context {
    team: Team,
    player: PlayerWithLogo,
    handleSetPlayer(name: string):void
}
  
export type{
    Children,
    Routes,
    Context
}