import React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'
import SEO from '../components/seo'

import SectionHero from '../components/sections/Hero'
import SectionBio from '../components/sections/Bio'
import SectionProjects from '../components/sections/Projects'
import SectionTools from '../components/sections/Tools'
import SectionInterests from '../components/sections/Interests'
import SectionContact from '../components/sections/Contact'
import SectionFooter from '../components/sections/Footer'

export const query = graphql`
  query {
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
          order
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
  const allProjects = data.allContentfulProject.edges.map((e) => ({
    ...e.node,
    description: e.node.description.description,
    image: e.node.image && e.node.image.file.url,
  }))

  const work = allProjects.filter((p) => p.isWork).sort((a, b) => a.order - b.order)
  const projects = allProjects.filter((p) => !p.isWork).sort((a, b) => a.order - b.order)

  return (
    <>
      {/* <Nav /> */}
      <Page>
        <SEO
          title="Victor Landim | Full Stack Web Developer"
          keywords={[
            `victor`,
            `landim`,
            `web`,
            `developer`,
            `programmer`,
            `portfolio`,
            `skills`,
            `react`,
            `react native`,
            `javascript`,
            `typescript`,
            `programming`,
            `fullstack`,
            `frontend`,
            `backend`,
          ]}
        />
        <SectionHero />
        <SectionBio />

        {/* <SectionProjects data={work} heading="Work" /> */}
        <SectionProjects data={projects} heading="Projects" showGithub />

        {/* <SectionTools /> */}

        <SectionInterests
          heading="Skills"
          data={[
            'C/C++',
            'CSS3/Sass',
            'Styled Components',
            'React',
            'Redux',
            'React Native',
            'HTML5',
            'Typescript/Javascript/ES6',
            'Node.js/Express.js',
            'MongoDB',
            'Google Firebase',
            'Java',
            'LibGDX',
            'PostgreSQL',
            'Python',
            'Kubernetes',
            'Docker',
          ].sort((a, b) => a - b)}
        />

        <SectionInterests
          heading="Interests"
          data={[
            'Game Development',
            'Computer Graphics',
            'Functional Programming',
            'Music Theory',
            'Photography',
            'Design',
            'Calligraphy',
            'Linguistics',
          ].sort((a, b) => a - b)}
        />

        <SectionContact />
        <SectionFooter />
      </Page>
    </>
  )
}

export default IndexPage
