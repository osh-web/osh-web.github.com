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
    name: 'オープンセミナー2020@広島',
    description:
      'IT技術者のボランティアによる中四国最高のセミナーイベント',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: '円',
      availability: 'in_stock',
      validForm: '2019-12-01',
      url: 'https://osh.connpass.com/event/146828/',
    },
    image: '',
    performar: [],
    startDate: '2020-02-08',
    endDate: '2020-02-08',
    performer: {
      '@type': 'Person',
      name: '',
    },
  }
  const json = JSON.stringify(structedData)
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}