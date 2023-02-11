import usePlayer from "@hooks/usePlayer"

const PlayerImg = () => {
  const { player } = usePlayer()
  const { name, photo, logo } = player
  
  return (
    <div className="flex justify-center bg-neutral-900 lg:w-[27%] lg:h-[27%] lg:m-8 relative">
        <img className="w-full lg:w-2/5" src={photo} alt={name} />
        <img className="absolute w-[15%] bottom-3 right-5" src={logo} alt={name}/>
    </div>
  )
}

export default PlayerImg