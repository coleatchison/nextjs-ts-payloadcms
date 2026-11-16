import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'

import config from '@/payload.config'
import Hero from '@/components/Hero/Hero'
import CardGrid from '@/components/CardGrid/CardGrid'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'home',
      },
    },
    depth: 2,
    limit: 1,
  })

  const pageData = result.docs[0]

  return (
    <>
      {pageData.layout?.map((block) => {
        switch (block.blockType) {
          case 'hero':
            return <Hero key={block.id} {...block} adminRoute={payloadConfig.routes.admin} />

          case 'cardGrid':
            return <CardGrid key={block.id} {...block} />

          default:
            return null
        }
      })}
    </>
  )
}
