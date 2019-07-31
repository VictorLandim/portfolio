import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import { Container } from '../components/Layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Page>
    <Container>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Page>
)

export default SecondPage
