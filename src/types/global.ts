import { ReactNode } from "react";

interface Children {
    children: ReactNode
}

interface Routes {
    route: string
    element: React.LazyExoticComponent<React.ComponentType<unknown>>
}
  
export type{
    Children,
    Routes
}