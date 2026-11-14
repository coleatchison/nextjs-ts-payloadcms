'use client'

import { Link, Sublinks } from '@/types'
import { useState } from 'react'

type HeaderMainLinkProps = {
  link: Link
  subLinks?: Sublinks
}

export default function HeaderMainLink({ link: { text, url }, subLinks }: HeaderMainLinkProps) {
  const [isHovered, setIsHovered] = useState(false)

  const toggleHover = () => {
    setIsHovered((prev) => !prev)
  }

  return (
    <div className="flex gap-4 relative" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <a href={url} className="hover:underline">
        {text}
      </a>
      {isHovered && subLinks && subLinks.length > 0 && (
        <ul className="flex flex-col gap-4 absolute top-full border border-white bg-zinc-900 rounded-md p-2">
          {subLinks?.map((subLink) => {
            return (
              <li key={subLink.id}>
                <a href={subLink.subLinkURL} className="hover:underline">
                  {subLink.subLinkText}
                </a>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
