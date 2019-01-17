// @flow strict
import React from 'react';

export type Props = {
    href: string,
    src: string,
    name: string,
}

export function SponsorBanner({name, href, src}: Props) {
    return (
        <a href={href}>
            <img src={src} alt={`${name} バナー`} style={{objectFit: "contain", width: "100%", height: 200}}/>
        </a>
    )
}