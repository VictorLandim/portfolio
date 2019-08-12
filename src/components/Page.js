import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/globalStyle'

const theme = {
  primary: '#202020',
  white: '#FFF',
  black: '#202020',
  lightGray: '#f5f5f5',
  gray: '#ccc',
  containerWidth: '112rem',
  containerWidthS: '75rem',
  containerWidthXs: '50rem'
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
          <main>{children}</main>
        </>
      </ThemeProvider>
    )}
  />
)

Page.propTypes = {
  children: PropTypes.node.isRequired
}

export default Page
