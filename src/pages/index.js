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
  HeroText
} from '../styles/indexStyles';

export const query = graphql`
  query ProjectsQuery {
    allContentfulProject {
      edges {
        node {
          id
          title
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
  const projects = data.allContentfulProject.edges.map(e => e.node);

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
          <Container padTop padBot>
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

          <Container padTop padBot>
            <Heading>Projects</Heading>
            <ProjectGrid>
              {projects
                .filter(p => !p.isWork)
                .reverse()
                .map(project => (
                  <Project key={project.id} {...project} />
                ))}
            </ProjectGrid>
          </Container>
        </Section>
        <Section>
          <Container padTop padBot>
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
          <Container padTop padBot>
            <Heading>Tools</Heading>
          </Container>
        </Section>
        <Footer />
      </Page>
    </>
  );
};

export default IndexPage;
