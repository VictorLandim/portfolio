import React from 'react'
import styled from 'styled-components'

const SocialLink = styled.a`
  display: block;
  color: ${p => p.theme.primary};
  font-size: 1.5rem;
  position: relative;
  text-decoration: none;
  padding-bottom: 1rem;
  margin: 0 0.5rem;
  font-family: 'Roboto Mono', monospace;

  &:before {
    content: '';
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${p => p.theme.primary};
    height: 4px;
  }
`

export default SocialLink
