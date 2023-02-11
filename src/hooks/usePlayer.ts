import { useContext, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { FootballContext } from "@context/FootballProvider"

const usePlayer = () => {
  const [searchParams] = useSearchParams()
  const playerName = searchParams.get("name") as string
  const { player, handleSetPlayer } = useContext(FootballContext)

  useEffect(() => {
    handleSetPlayer(playerName)
  }, [])

  return {
    player,
  }
}

export default usePlayer
