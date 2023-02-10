import { ReactNode } from "react";
import { Player, Team } from "@customTypes/team";

interface Children {
    children: ReactNode
}

interface Routes {
    route: string
    element: React.LazyExoticComponent<React.ComponentType<unknown>>
}

interface Context {
    team: Team,
    player: Player,
    handleSetPlayer(name: string):void
}
  
export type{
    Children,
    Routes,
    Context
}