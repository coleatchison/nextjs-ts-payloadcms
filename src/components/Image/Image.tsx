import { Media } from '@/payload-types'
import NextImage from 'next/image'

export default function Image({ image, classes }: { image: Media; classes?: string }) {
  if (!image || !image.url) return <></>

  return (
    <NextImage
      className={classes}
      src={image.url}
      width={image.width || undefined}
      height={image.height || undefined}
      alt={image.alt}
    />
  )
}
