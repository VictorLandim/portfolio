import styled from 'styled-components'
import { PHONE } from '../styles/responsive'

const ExternalLink = styled.a`
  font-family: 'Roboto Mobo', monospace;
  font-size: 1.75rem;
  color: ${p => p.theme.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  position: relative;
  padding-bottom: 1rem;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    transform: scaleX(0);
    transform-origin: left;
    background-color: ${p => p.theme.primary};
    transition: 0.3s all;
  }

  &:hover:before {
    transform: scaleX(1);
  }

  svg {
    margin-left: 1rem;
  }
`

const SocialLink = styled(ExternalLink)`
  margin: 0 2rem;

  @media ${PHONE} {
    margin-bottom: 1rem;
    flex: 0 0 100%;
  }
`

export { ExternalLink, SocialLink }
