import { lazy } from "react"
import { Routes } from "@customTypes/routes";
import App from "@routes/App";

/**
 * These dynamics imports implement lazy load
 * and incresea the performance of the App
 */
const Home = lazy(() => import("@pages/Home"))

/**
 * These way to define the router give the posibility
 * to change the Route in one side and have a clean code
 * in the Router Component
 */
const ROUTER: Routes[] = [
  { route: "/", element: Home },
//   { route: "/player", element:  },
//   { route: "*", element: NotFound },
]

export {
    ROUTER
}