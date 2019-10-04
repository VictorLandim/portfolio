import React from 'react'

import Section from '../../Section'
import SectionHeading from '../../SectionHeading'
import { Container, Flex } from '../../Layout'
import Interest from './Interest'

export default ({ data, heading }) => (
  <Section>
    <Container padded>
      <SectionHeading>{heading}</SectionHeading>
      <Container size="s">
        <Flex>
          {data.sort().map(interest => (
            <Interest key={interest}>{interest}</Interest>
          ))}
        </Flex>
      </Container>
    </Container>
  </Section>
)
