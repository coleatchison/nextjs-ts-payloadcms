import { getPayload } from 'payload'
import config from '@/payload.config'
import HeaderMainLink from '../HeaderLinks/HeaderMainLink'
import Image from '../Image/Image'
import { Media } from '@/payload-types'

export default async function Header() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const header = await payload.findGlobal({ slug: 'header' })

  return (
    <div className="py-2 w-full border-b-2 border-gray-100">
      <div className="flex w-full max-w-6xl mx-auto justify-between items-center">
        <div className="rounded-full overflow-clip">
          <Image image={header.logo as Media} classes="w-16" />
        </div>

        <div className="flex gap-4">
          {header.links?.map((link) => {
            return (
              <HeaderMainLink
                key={link.id}
                link={{ text: link.mainLinkText, url: link.mainLinkURL }}
                subLinks={link.subLinks}
              />
            )
          })}
        </div>

        <a className="hover:underline" href={header.ctaURL}>
          {header.ctaText}
        </a>
      </div>
    </div>
  )
}
