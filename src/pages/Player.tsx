import usePlayer from "@hooks/usePlayer";

const Player = () => {
  const { player } = usePlayer()

  console.log(player)

  return (
    player ? <div>{player.name}</div> : null
  )
}

export default Player
