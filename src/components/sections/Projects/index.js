import React from 'react'
import Project from './Project'
import { ProjectsContainer } from './styles'
import { Container, Flex } from '../../../components/Layout'
import SectionHeading from '../../../components/SectionHeading'
import { ExternalLink } from '../../../components/Link'

export default ({ data, heading, showGithub }) => (
  <ProjectsContainer>
    <Container padded>
      <SectionHeading>{heading}</SectionHeading>
      <Flex justifyContent="space-between">
        {data.map(project => (
          <Project key={project.id} {...project} />
        ))}
      </Flex>
      {showGithub && (
        <ExternalLink target="_blank" href="https://github.com/VictorLandim">
          View more on GitHub &rarr;
        </ExternalLink>
      )}
    </Container>
  </ProjectsContainer>
)
