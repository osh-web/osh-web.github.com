// @flow
import React from 'react'
import { Head } from 'react-static'

import { Hero } from '../../components/2018'
import EventAbstract from '../../containers/EventAbstract'
import SponsorBannars from '../../containers/SponsorBannars'
import Speakers from '../../containers/2018/Speakers'

export default () => (
    <div>
        <Head>
            <title>オープンセミナー2018@広島</title>
        </Head>
        <Hero />
        <Speakers/>
        <EventAbstract />
        <SponsorBannars />
    </div>
)
