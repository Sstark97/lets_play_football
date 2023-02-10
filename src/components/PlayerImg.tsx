import type { PlayerImg } from "@customTypes/components"

const PlayerImg = ({ image, icon, alt}: PlayerImg) => {
  return (
    <div className="flex justify-center bg-neutral-900 lg:w-[27%] lg:h-[27%] lg:m-8 relative">
        <img className="w-full lg:w-2/5" src={image} alt={alt} />
        <img className="absolute w-[15%] bottom-3 right-5" src={icon} alt={alt}/>
    </div>
  )
}

export default PlayerImg