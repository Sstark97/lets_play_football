import type { Logo } from "@customTypes/components"

const Logo = ({ image, alt }: Logo) => {
  return (
    <div className="flex justify-center bg-neutral-900 py-6 lg:w-1/4 lg:h-1/4 lg:m-8">
        <img className="w-1/2 lg:w-2/5" src={image} alt={alt} />
    </div>
  )
}

export default Logo