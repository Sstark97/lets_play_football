import capitalize from "@utils/capitalize"
import type { TeamInfo } from "@customTypes/components"

const TeamInfo = ({ name, country, players, age }: TeamInfo) => {
  const countryCapitalize = capitalize(country)

  return (
    <article className="bg-paris p-5 pb-8 lg:lg:w-3/4">
        <div className="pb-8 border-b-2 border-slate-50 border-opacity-40">
            <h1 className="text-3xl text-white font-semibold">{name}</h1>
            <h2 className="text-2xl text-slate-300 font-semibold">{countryCapitalize}</h2>
        </div>
        <div className="pt-4">
            <p className="text-lg text-white font-medium opacity-90">INFO</p>
            <div className="w-[25%] flex justify-around ml-8 lg:m-0 lg:w-[15%] lg:mt-4 lg:ml-4">
                <p className="text-lg text-white font-medium opacity-90">Players</p>
                <div className="text-lg text-slate-300 font-medium">{players}</div>
            </div>
            <div className="w-[30%] flex justify-around ml-10 lg:m-0 lg:w-[22%] lg:ml-4">
                <p className="text-lg text-white font-medium opacity-90">Age</p>
                <p className="text-lg text-slate-300 font-medium">{age} YEARS</p>
            </div>
        </div>
    </article>
  )
}

export default TeamInfo