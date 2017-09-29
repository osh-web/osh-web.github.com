import React, { Component } from 'react'

export default () => {
  const structed_data = {
    "@context": "http://schema.org",
    "@type": "Event",
    "location": {
      "@type": "Place",
      "name": "サテライトキャンパスひろしま 501",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "日本",
        "addressRegion": "中国地方",
      }
    },
    "name": "オープンセミナー2018@広島 「いまさらチームビルディング」",
    "description": "IT技術者のボランティアによる中四国最高のセミナーイベント。今回はチームビルディングにフォーカスを当てます。",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "円"
    },
    "startDate": "2018-02-24",
    "endDate": "2018-02-24"
  }
  const json = JSON.stringify(structed_data)
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: json}} />
}
