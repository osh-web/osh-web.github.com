import React, { Component } from 'react'

export default () => {
  const structedData = {
    '@context': 'http://schema.org',
    '@type': 'Event',
    location: {
      '@type': 'Place',
      name: 'サテライトキャンパスひろしま 501 502',
      address: {
        '@type': 'PostalAddress',
        addressCountry: '日本',
        addressRegion: '中国地方',
      },
    },
    name: 'オープンセミナー2022@広島',
    description:
      'IT技術者のボランティアによる中四国最高のセミナーイベント',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: '円',
      availability: 'in_stock',
      validFrom: '2022-03-30',
      url: 'https://osh.connpass.com/event/242991/',
    },
    image: '',
    performar: [],
    startDate: '2022-03-30',
    endDate: '2022-05-26',
    performer: {
      '@type': 'Person',
      name: '',
    },
  }
  const json = JSON.stringify(structedData)
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}
