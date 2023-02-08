import type { TeamInfo } from "@customTypes/components"

const TeamInfo = ({ name, country, players, age }: TeamInfo) => {
  const countryCapitalize = `${country?.charAt(0).toUpperCase()}${country?.slice(1)}`

  return (
    <div className="bg-paris p-5 pb-8">
        <div className="pb-8 border-b-2 border-slate-50 border-opacity-40">
            <h1 className="text-3xl text-white font-semibold">{name}</h1>
            <h2 className="text-2xl text-slate-300 font-semibold">{countryCapitalize}</h2>
        </div>
        <div className="pt-4">
            <p className="text-lg text-white font-medium">INFO</p>
            <div className="w-[25%] flex justify-around ml-8">
                <p className="text-lg text-white font-medium">Players</p>
                <div className="text-lg text-slate-300 font-medium">{players}</div>
            </div>
            <div className="w-[30%] flex justify-around ml-10">
                <p className="text-lg text-white font-medium">Age</p>
                <p className="text-lg text-slate-300 font-medium">{age} YEARS</p>
            </div>
        </div>
    </div>
  )
}

export default TeamInfo