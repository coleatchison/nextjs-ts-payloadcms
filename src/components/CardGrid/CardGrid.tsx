import { CardGridBlock } from '@/payload-types'
import Section from '../Section/Section'

export default function CardGrid({ heading, subheading, cards }: CardGridBlock) {
  if (!cards?.length || cards.length <= 0) return <></>

  return (
    <Section>
      <div className="flex flex-col gap-8">
        <div>
          <h2>{heading}</h2>
          {subheading && <h3>{subheading}</h3>}
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
          {cards?.map((card) => (
            <GridCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </Section>
  )
}

function GridCard({ name, description }: NonNullable<CardGridBlock['cards']>[number]) {
  return (
    <div className="p-4 bg-zinc-800 border border-white rounded-2xl">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}
