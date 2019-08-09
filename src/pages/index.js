import React from 'react';
import { graphql } from 'gatsby';

import Page from '../components/Page';
import SEO from '../components/seo';
import Project from '../components/Project';
import Interest from '../components/Interest';

import { Container } from '../components/Layout';

import {
  Hamburguer,
  Heading,
  Hero,
  Section,
  Subtitle,
  Title,
  ExternalLink,
  ProjectGrid,
  InterestContainer
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
    <Page>
      <Hero>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Hamburguer>🍔</Hamburguer>
        <Title value="hi! i'm victor.">hi! i'm victor.</Title>
        <Subtitle>
          fullstack developer creating web experiences at{' '}
          <ExternalLink href="https://aulascolmeia.com.br">Colmeia</ExternalLink>.
        </Subtitle>
      </Hero>
      <Section>
        <Container padTop padBot>
          <Heading>Projects</Heading>
          <ProjectGrid>
            {projects.map(project => (
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
              <Interest>{interest}</Interest>
            ))}
          </InterestContainer>
        </Container>
        <Container padTop padBot>
          <Heading>Tools</Heading>
        </Container>
      </Section>
    </Page>
  );
};

export default IndexPage;
