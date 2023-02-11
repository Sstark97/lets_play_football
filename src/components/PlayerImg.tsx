import usePlayer from "@hooks/usePlayer"

const PlayerImg = () => {
  const { player } = usePlayer()
  const { name, photo, logo } = player
  
  return (
    <div className="flex justify-center bg-neutral-900 relative lg:w-[32%] lg:h-[32vh] lg:mt-4">
        <img className="w-full h-full" src={photo} alt={name} />
        <img className="absolute w-[15%] bottom-3 right-5" src={logo} alt={name}/>
    </div>
  )
}

export default PlayerImg