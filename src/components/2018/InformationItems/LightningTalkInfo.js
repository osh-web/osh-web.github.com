import React from 'react'
import { Flex, Half } from 'grid-styled'
import H2 from '../H2'

const LightningTalkInfo = () => (
  <div>
    <H2>ライトニングトークの公募</H2>
    <Flex justify="center">
      <Half px={10}>
        <p>
          本セミナー内でライトニングトーク大会のライトニングトークを公募しています。
          希望の方は
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeu7K22CflKVv3q8rbjoBIyIQWuUpL1MBmCBxpkoU4vM0_kvg/viewform">
            こちら{' '}
          </a>
          から応募してください。
        </p>
      </Half>
    </Flex>
  </div>
)
export default LightningTalkInfo
