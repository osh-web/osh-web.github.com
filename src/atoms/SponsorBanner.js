// @flow strict
import React from 'react'

export type Props = {
  href: string,
  src: string,
  name: string,
  height: Number,
}

export function SponsorBanner({ name, href, src, height }: Props) {
  return href ? (
    <a href={href}>
      <img
        src={src}
        alt={`${name} バナー`}
        style={{ objectFit: 'contain', width: '100%', height: height + 'px' }}
      />
    </a>
  ) : (
    <img
        src={src}
        alt={`${name} バナー`}
        style={{ objectFit: 'contain', width: '100%', height: height + 'px' }}
      />
  )
}
