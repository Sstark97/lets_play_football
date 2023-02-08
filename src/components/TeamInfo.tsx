import type { TeamInfo } from "@customTypes/components"

const TeamInfo = ({ name, country, players, age }: TeamInfo) => {
  return (
    <>
        <div>
            <h1>{name}</h1>
            <h2>{country}</h2>
        </div>
        <div>
            <p>INFO</p>
            <div>
                <div>Players</div>
                <div>{players}</div>
            </div>
            <div>
                <div>Age</div>
                <div>{age}</div>
            </div>
        </div>
    </>
  )
}

export default TeamInfo