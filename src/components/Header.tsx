import { AiOutlineSearch } from "react-icons/ai"
import { RiFootballLine } from "react-icons/ri"

const Header = () => {
  return (
    <header className="w-screen h-20 text-paris text-lg">
      <nav className="w-full h-full flex border-b-[1px] border-paris">
        <div className="w-1/5 flex items-center justify-center lg:w-[6%]">
          <RiFootballLine className="text-4xl fill-white bg-paris border-4 border-paris rounded-xl"/>
        </div>
        <div className="w-3/5 flex justify-around items-center border-x-[1px] border-paris lg:w-[88%] lg:justify-start">
          <div className="font-semibold lg:mx-16">PLAYERS</div>
          <div className="font-semibold">TEAMS</div>
        </div>
        <div className="w-1/5 flex items-center justify-center lg:w-[8%]">
          <AiOutlineSearch className="text-2xl"/>
        </div>
      </nav>
    </header>
  )
}

export default Header