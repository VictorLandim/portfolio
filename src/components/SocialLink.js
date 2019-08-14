import styled from 'styled-components'

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${p => p.theme.primary};
  font-size: 1.75rem;
  position: relative;
  text-decoration: none;
  padding-bottom: 1rem;
  margin: 0 2rem;
  font-family: 'Roboto Mono', monospace;
  cursor: pointer;

  svg {
    margin-left: 1rem;
  }

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
