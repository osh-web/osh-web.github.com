// @flow strict
import React from 'react'

export type Props = {
  href: string,
  src: string,
  name: string,
}

const personalSponsorStyle = {
  margin: '0.5%',
  textAlign: 'center',
  display: 'inline-block',
}

const avatarStyle = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  objectFit: 'cover',
  border: '2px solid #ddd',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
}

export function PersonalSponsorAvatar({ name, href, src }: Props) {
  return (
    <div style={personalSponsorStyle}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img
          src={src || '/img/2025/avatar.png'}
          alt={`${name} アバター`}
          style={avatarStyle}
          onMouseOver={(e) => { e.target.style.transform = 'scale(1.1)' }}
          onMouseOut={(e) => { e.target.style.transform = 'scale(1)' }}
          onFocus={(e) => { e.target.style.transform = 'scale(1.1)' }}
          onBlur={(e) => { e.target.style.transform = 'scale(1)' }}
        />
      </a>
    </div>
  )
} 