import { HeroBlock, Media } from '@/payload-types'
import Image from '../Image/Image'
import Section from '../Section/Section'

type HeroProps = HeroBlock & {
  adminRoute: string
}

export default function Hero({ heading, subheading, image, adminRoute }: HeroProps) {
  return (
    <Section>
      <div className="flex flex-col-reverse lg:flex-row gap-12 w-full items-center">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-4">
            <h1>{heading}</h1>
            {subheading && <h2 className="">{subheading}</h2>}
          </div>
          <a
            className="bg-white hover:bg-zinc-400 hover:cursor-pointer text-black rounded-md w-fit px-2 py-1"
            href={adminRoute}
            rel="noopener noreferrer"
            target="_blank"
          >
            Go to admin panel
          </a>
        </div>
        <Image image={image as Media} classes="w-100 rounded-2xl border border-white" />
      </div>
    </Section>
  )
}
