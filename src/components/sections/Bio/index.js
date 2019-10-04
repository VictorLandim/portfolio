import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Section from '../../../components/Section'
import SectionHeading from '../../../components/SectionHeading'
import { Container, Flex } from '../../../components/Layout'

import { BioImageContainer, BioImage, BioText } from './styles'

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

  return (
    <Section>
      <Container padded>
        <SectionHeading>Bio</SectionHeading>
        <Flex mobileColumn>
          <BioImageContainer>
            <BioImage fluid={fluid} alt="Victor Landim profile" />
          </BioImageContainer>

          <BioText>
            Hi! I'm Victor Landim, a 22 year old full-stack web developer passionate about code and
            music. I believe in technology as a means to enhance and positively impact other
            people's lives. In my work, I strive for both simplicity and efficiency, by using modern
            cutting-edge tools as well as best practices.
            <br />
            <br />
            Always learning and adapting.
          </BioText>
        </Flex>
      </Container>
    </Section>
  )
}
