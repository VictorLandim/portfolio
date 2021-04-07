import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Container, Flex } from '../../../components/Layout'
import Section from '../../../components/Section'
import SectionHeading from '../../../components/SectionHeading'
import { BioImage, BioImageContainer, BioText, ResumeLink } from './styles'

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
    }
  `)

  const { fluid } = data.file.childImageSharp
  const resumePdfUrl = '/resume.pdf'
  const resumeUrl = '/resume'

  return (
    <Section>
      <Container padded>
        <SectionHeading>Bio</SectionHeading>
        <Flex mobileColumn>
          <BioImageContainer>
            <BioImage fluid={fluid} alt="Victor Landim profile" />
          </BioImageContainer>

          <BioText>
            I'm Victor Landim, a software developer passionate about code and music. <br /> I
            believe in technology as a means to enhance and positively impact the lives of others
            around me. In my work, I strive for both simplicity and efficiency, by using modern
            cutting-edge tools as well as best practices.
            <br />
            <br />
            Always learning and adapting.
            <br />
            <br />
            <br />
            <ResumeLink href={resumeUrl} target="_blank" style={{ marginRight: '42px' }}>
              <FiChevronRight size={15} color="#303030" /> resume page
            </ResumeLink>
            <ResumeLink href={resumePdfUrl} target="_blank">
              <FiChevronRight size={15} color="#303030" /> resume.pdf
            </ResumeLink>
          </BioText>
        </Flex>
      </Container>
    </Section>
  )
}
