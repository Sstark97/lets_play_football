import type { Player } from "@customTypes/team"

const Player = ({ name, lastname, photo, position }: Player) => {
  const positionCapitalized = `${position?.charAt(0).toUpperCase()}${position?.slice(1)}`

  return (
    <div className="flex p-3 lg:w-1/3 lg:px-8 lg:py-0 lg:pt-3">
        <img className="object-cover w-2/5 mr-8" src={photo} alt={name} />
        <div className="mt-2">
            <p className="text-xl font-semibold lg:text-lg">{`${name} ${lastname}`}</p>
            <p className="text-lg font-semibold text-slate-400 lg:text-sm">{positionCapitalized}</p>
        </div>
    </div>
  )
}

export default Player