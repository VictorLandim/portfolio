import React from 'react';
import { graphql } from 'gatsby';

import Page from '../components/Page';
import SEO from '../components/seo';
import Project from '../components/Project';
import Interest from '../components/Interest';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

import { Container } from '../components/Layout';

import {
  Heading,
  Hero,
  Section,
  Subtitle,
  Title,
  ExternalLink,
  ProjectGrid,
  InterestContainer,
  HeroText,
  ProjectMoreButton
} from '../components/Index';

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
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const projects = data.allContentfulProject.edges.map(e => ({
    ...e.node,
    description: e.node.description.description,
    image: e.node.image && e.node.image.file.url
  }));

  return (
    <>
      {/* <Nav /> */}
      <Page>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Hero>
          <HeroText>
            <Title value="hi! i'm victor.">hi! i'm victor.</Title>
            <Subtitle>
              fullstack developer creating web experiences at{' '}
              <ExternalLink href="https://aulascolmeia.com.br">Colmeia</ExternalLink>.
            </Subtitle>
          </HeroText>
        </Hero>
        <Section>
          <Container padded>
            <Heading>Work</Heading>
            <ProjectGrid>
              {projects
                .filter(p => p.isWork)
                .reverse()
                .map(project => (
                  <Project key={project.id} {...project} />
                ))}
            </ProjectGrid>
          </Container>
        </Section>

        <Section>
          <Container padded>
            <Heading>Projects</Heading>
            <ProjectGrid>
              {projects
                .filter(p => !p.isWork)
                .reverse()
                .map(project => (
                  <Project key={project.id} {...project} />
                ))}
            </ProjectGrid>
            <ProjectMoreButton href="https://github.com/VictorLandim">
              View more on GitHub &rarr;
            </ProjectMoreButton>
          </Container>
        </Section>

        <Section>
          <Container padded>
            <Heading>Interests</Heading>
            <InterestContainer>
              {[
                'Game Development',
                'Computer Graphics',
                'Functional Programming',
                'Music Theory',
                'Photography'
              ].map(interest => (
                <Interest key={interest}>{interest}</Interest>
              ))}
            </InterestContainer>
          </Container>
        </Section>

        <Section>
          <Container padded>
            <Heading>Toolbox</Heading>
            <InterestContainer>
              {['NodeJS', 'React', 'React Native', 'Sass', 'BEM', 'Git'].map(interest => (
                <Interest key={interest}>{interest}</Interest>
              ))}
            </InterestContainer>
          </Container>
        </Section>

        <Section>
          <Container padded>
            <Heading>Find me</Heading>
            <InterestContainer>
              {['Music Theory', 'Photography'].map(interest => (
                <Interest key={interest}>{interest}</Interest>
              ))}
            </InterestContainer>
          </Container>
        </Section>

        <Footer />
      </Page>
    </>
  );
};

export default IndexPage;
