import { useSearchParams } from "react-router-dom"

const Player = () => {
  const [searchParams] = useSearchParams()
  const playerName = searchParams.get("name") as string

  return (
    <div>
        {playerName}
    </div>
  )
}

export default Player
