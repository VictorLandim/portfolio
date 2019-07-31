import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { GlobalStyle } from './globalStyle'
import { MainWrapper } from './Layout'
import { ThemeProvider } from 'styled-components'

const theme = {
  primary: '#202020',
  white: '#FFF',
  black: '#202020'
}

const Page = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <MainWrapper>
            <main>{children}</main>
          </MainWrapper>
        </>
      </ThemeProvider>
    )}
  />
)

Page.propTypes = {
  children: PropTypes.node.isRequired
}

export default Page
