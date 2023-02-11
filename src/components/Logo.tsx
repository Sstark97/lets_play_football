import type { Logo } from "@customTypes/components"

const Logo = ({ image, alt}: Logo) => {
  return (
    <article className="flex justify-center bg-neutral-900 py-6 lg:w-[27%] lg:h-[27%] lg:m-8">
        <img className="w-1/2 lg:w-2/5" src={image} alt={alt} />
    </article>
  )
}

export default Logo