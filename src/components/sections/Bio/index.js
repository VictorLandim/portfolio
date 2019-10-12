import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

import Section from '../../../components/Section'
import SectionHeading from '../../../components/SectionHeading'
import { Container, Flex } from '../../../components/Layout'

import { BioImageContainer, BioImage, BioText, ResumeLink } from './styles'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/bio.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      resume: file(name: { eq: "resume" }) {
        id
        publicURL
      }
    }
  `)

  const { fluid } = data.file.childImageSharp
  const { publicURL } = data.resume

  return (
    <Section>
      <Container padded>
        <SectionHeading>Bio</SectionHeading>
        <Flex mobileColumn>
          <BioImageContainer>
            <BioImage fluid={fluid} alt="Victor Landim profile" />
          </BioImageContainer>

          <BioText>
            I'm Victor Landim, a motivated full stack web developer passionate about code and music.
            I believe in technology as a means to enhance and positively impact the lives of others
            around me. In my work, I strive for both simplicity and efficiency, by using modern
            cutting-edge tools as well as best practices.
            <br />
            <br />
            Always learning and adapting.
            <br />
            <br />
            <br />
            <ResumeLink href={publicURL} target="_blank">
              <FiChevronRight size={15} color="#303030" /> resume.pdf
            </ResumeLink>
          </BioText>
        </Flex>
      </Container>
    </Section>
  )
}