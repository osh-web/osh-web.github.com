// @flow strict
import React from 'react';

export type Props = {
    href: string,
    src: string,
    name: string,
}

export function SponsorBanner({name, href, src, fit }: Props) {
    return (
        <a href={href}>
            <img src={src} alt={`${name} バナー`} style={{objectFit: 'contain', width: "100%", height: 150}}/>
        </a>
    )
}