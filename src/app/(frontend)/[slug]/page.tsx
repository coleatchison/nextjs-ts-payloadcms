import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'

import config from '@/payload.config'
import Hero from '@/components/Hero/Hero'
import CardGrid from '@/components/CardGrid/CardGrid'

export default async function HomePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // route user to 404 if no slug
  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
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
