import type { Logo } from "@customTypes/components"

const Logo = ({ image, alt }: Logo) => {
  return (
    <div className="flex justify-center bg-neutral-900">
        <img className="w-1/2" src={image} alt={alt} />
    </div>
  )
}

export default Logo