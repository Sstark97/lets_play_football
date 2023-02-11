import PlayerImg from "@components/PlayerImg"
import PlayerData from "@containers/PlayerData"

const Player = () => (
  <section className="bg-paris pb-8 lg:flex lg:items-start lg:pb-24 lg:px-8 lg:pt-4">
    <PlayerImg />
    <PlayerData />
  </section>
)

export default Player
