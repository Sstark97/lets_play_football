import type { Player } from "@customTypes/team"

const Player = ({ name, lastname, photo, position }: Player) => {
  const positionCapitalized = `${position?.charAt(0).toUpperCase()}${position?.slice(1)}`

  return (
    <div className="flex p-3 lg:w-1/3 lg:p-8">
        <img className="w-2/5 mr-8" src={photo} alt={name} />
        <div>
            <p className="text-xl font-semibold">{`${name} ${lastname}`}</p>
            <p className="text-lg font-semibold text-slate-400">{positionCapitalized}</p>
        </div>
    </div>
  )
}

export default Player