import React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'
import SEO from '../components/seo'
import Project from '../components/Project'
import Interest from '../components/Interest'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import SocialLink from '../components/SocialLink'

import { Container, Flex } from '../components/Layout'

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
  DiVisualstudio
} from 'react-icons/di'

import {
  Heading,
  Hero,
  Section,
  SectionProjects,
  Subtitle,
  Title,
  ExternalLink,
  ProjectGrid,
  InterestContainer,
  HeroText,
  ProjectMoreButton,
  ToolContainer
} from '../components/Index'

export const query = graphql`
  query ProjectsQuery {
    allContentfulProject {
      edges {
        node {
          id
          title
          description {
            description
          }
          tech
          source
          website
          isWork
          isApp
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const projects = data.allContentfulProject.edges.map(e => ({
    ...e.node,
    description: e.node.description.description,
    image: e.node.image && e.node.image.file.url
  }))

  console.log(projects)

  return (
    <>
      {/* <Nav /> */}
      <Page>
        <SEO title="Home" keywords={[`victor`, `landim`, `web`, `developer`, `portfolio`]} />
        <Hero>
          <HeroText>
            <Title>hi! i'm ∇ictor.</Title>
            <Subtitle>
              university of brasília undergraduate and <br /> fullstack developer crafting web
              experiences at{' '}
              <ExternalLink target="_blank" href="https://aulascolmeia.com.br">
                Colmeia
              </ExternalLink>
              .
            </Subtitle>
          </HeroText>
        </Hero>
        <SectionProjects>
          <Container padded>
            <Heading>Work</Heading>
            <Flex justifyContent="space-between">
              {projects
                .filter(p => p.isWork)
                .reverse()
                .map(project => (
                  <Project key={project.id} {...project} />
                ))}
            </Flex>
          </Container>
        </SectionProjects>
        <SectionProjects>
          <Container padded>
            <Heading>Projects</Heading>
            <Flex justifyContent="space-between">
              {projects
                .filter(p => !p.isWork)
                .reverse()
                .map(project => (
                  <Project key={project.id} {...project} />
                ))}
            </Flex>
            <ProjectMoreButton target="_blank" href="https://github.com/VictorLandim">
              View more on GitHub &rarr;
            </ProjectMoreButton>
          </Container>
        </SectionProjects>

        <Section>
          <Container padded>
            <Heading>Interests</Heading>
            <Flex>
              {[
                'Game Development',
                'Computer Graphics',
                'Functional Programming',
                'Music Theory',
                'Photography',
                'Design',
                'Calligraphy',
                'Linguistics'
              ].map(interest => (
                <Interest key={interest}>{interest}</Interest>
              ))}
            </Flex>
          </Container>
        </Section>

        <Section>
          <Container padded>
            <Heading>Toolbox</Heading>
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

        <Section>
          <Container padded>
            <Heading>Find me</Heading>
            <Flex>
              <SocialLink>Github</SocialLink>
              <SocialLink>Email</SocialLink>
              <SocialLink>LinkedIn</SocialLink>
            </Flex>
          </Container>
        </Section>

        <Footer />
      </Page>
    </>
  )
}

export default IndexPage
