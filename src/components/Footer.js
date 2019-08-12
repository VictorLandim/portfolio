import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  color: ${p => p.theme.lightGray};
  background-color: ${p => p.theme.primary};
  padding: 2.5rem 0;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 1.5rem;
  font-family: 'Roboto Mono', monospace;
`

export default () => <Footer>{`© ${new Date().getFullYear()}, 💻 with ❤ by Victor Landim.`}</Footer>
