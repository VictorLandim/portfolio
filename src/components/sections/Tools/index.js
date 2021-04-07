import React from 'react'
import Section from '../../../components/Section'
import SectionHeading from '../../../components/SectionHeading'
import { Container } from '../../Layout'

import { ToolContainer } from './styles'

import {
  DiCss3,
  DiGit,
  DiGulp,
  DiHtml5,
  DiJsBadge,
  DiMongodb,
  DiNodejs,
  DiReact,
  DiSass,
  DiTerminal,
  DiVisualstudio,
} from 'react-icons/di'

export default () => (
  <Section>
    <Container padded>
      <SectionHeading>Toolbox</SectionHeading>
      <ToolContainer>
        <DiCss3 size={40} color={'#202020'} />
        <DiGit size={40} color={'#202020'} />
        <DiGulp size={40} color={'#202020'} />
        <DiHtml5 size={40} color={'#202020'} />
        <DiJsBadge size={40} color={'#202020'} />
        <DiMongodb size={40} color={'#202020'} />
        <DiNodejs size={40} color={'#202020'} />
        <DiReact size={40} color={'#202020'} />
        <DiSass size={40} color={'#202020'} />
        <DiTerminal size={40} color={'#202020'} />
        <DiVisualstudio size={40} color={'#202020'} />
      </ToolContainer>
    </Container>
  </Section>
)
