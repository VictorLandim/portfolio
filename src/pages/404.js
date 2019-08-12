import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Page from '../components/Page'
import SEO from '../components/seo'

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(
    to bottom right,
    ${p => p.theme.primary} 50%,
    ${p => p.theme.white} 50%
  );
`

const Heading = styled.h1`
  margin-bottom: 2rem;
  font-size: 10rem;
  font-weight: 700;
`
const SubHeading = styled.p`
  font-size: 3rem;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom right,
    ${p => p.theme.white} 50%,
    ${p => p.theme.primary} 50%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const HomeLink = styled(Link).attrs({
  to: '/'
})`
  font-size: 2.5rem;
  margin-top: 4rem;
`
export default () => (
  <Page>
    <SEO title="404: Not found" />
    <Container>
      <Content>
        <Heading>(?)</Heading>
        <SubHeading>This page does not exist.</SubHeading>
        <HomeLink>Go home &rarr;</HomeLink>
      </Content>
    </Container>
  </Page>
)
