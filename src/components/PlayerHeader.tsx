import usePlayer from "@hooks/usePlayer"
import capitalize from "@utils/capitalize"

const PlayerHeader = () => {
  const { player } = usePlayer()
  const { name, lastname, position, number } = player
  const positionCapitalized = capitalize(position)

  return (
    <div className="flex justify-between items-center border-b-2 border-slate-50 border-opacity-40 mt-4 pb-8 ">
      <div>
        <h1 className="text-3xl text-white font-medium">{`${name} ${lastname}`}</h1>
        <h2 className="text-2xl text-slate-300 font-medium">{positionCapitalized}</h2>
      </div>
      <p className="text-7xl text-white">{number}</p>
    </div>
  )
}

export default PlayerHeader