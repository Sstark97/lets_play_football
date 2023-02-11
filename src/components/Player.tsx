import { Link } from "react-router-dom"
import capitalize from "@utils/capitalize"
import type { Player } from "@customTypes/team"

const Player = ({ name, lastname, photo, position }: Player) => {
  const positionCapitalized = capitalize(position)

  return (
    <Link to={`player?name=${name}`} className="flex p-3 lg:w-1/3 lg:px-8 lg:py-0 lg:pt-3">
        <div className="w-2/5 mr-8 bg-neutral-900">
          <img className="w-full text-white text-center object-cover" src={photo} alt={name} />
        </div>
        <div className="mt-2">
            <p className="text-xl font-semibold lg:text-lg">{`${name} ${lastname}`}</p>
            <p className="text-lg font-semibold text-slate-400 lg:text-sm">{positionCapitalized}</p>
        </div>
    </Link>
  )
}

export default Player