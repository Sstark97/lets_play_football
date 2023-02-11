import { lazy } from "react"
import { Routes } from "@customTypes/global";

/**
 * These dynamics imports implement lazy load
 * and incresea the performance of the App
 */
const Home = lazy(() => import("@pages/Home"))
const Player = lazy(() => import("@pages/Player"))
const NotFound = lazy(() => import("@pages/NotFound"))

/**
 * These way to define the router give the posibility
 * to change the Route in one side and have a clean code
 * in the Router Component
 */
const ROUTER: Routes[] = [
  { route: "/", element: Home },
  { route: "/player", element: Player},
  { route: "*", element: NotFound },
]

export {
  ROUTER
}