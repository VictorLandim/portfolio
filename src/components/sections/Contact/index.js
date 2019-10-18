import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaCodepen } from 'react-icons/fa'

import Section from '../../Section'
import SectionHeading from '../../SectionHeading'
import { Container, Flex } from '../../Layout'
import { SocialLink } from '../../Link'

export default () => (
  <Section>
    <Container padded>
      <SectionHeading>Find me</SectionHeading>
      <Flex>
        <SocialLink href="mailto:hi@victorlandim.com" target="_blank">
          Email <FaEnvelope size={18} color={'#202020'} />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/victor-landim/" target="_blank">
          LinkedIn <FaLinkedin size={18} color={'#202020'} />
        </SocialLink>
        <SocialLink href="https://github.com/victorLandim/" target="_blank">
          Github <FaGithub size={18} color={'#202020'} />
        </SocialLink>
        <SocialLink href="https://codepen.io/victorlandim" target="_blank">
          CodePen <FaCodepen size={18} color={'#202020'} />
        </SocialLink>
      </Flex>
    </Container>
  </Section>
)
