import styled from 'styled-components'
import Img from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import { PHONE } from '../../../styles/responsive'

const SIZE = '23rem'
const MARGIN = '12rem'

export const BioImageContainer = styled.div`
  position: relative;
  border-radius: 50%;
  width: ${SIZE};
  height: ${SIZE};
  overflow: hidden;
  margin-right: 8rem;
  margin-left: ${MARGIN};
  box-shadow: 0rem 0.5rem 1rem 0rem rgba(0, 0, 0, 0.2);
  filter: grayscale();

  @media ${PHONE} {
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 5rem;
  }
`

export const BioImage = styled(Img)`
  position: absolute;
  top: 0rem;
  left: -5rem;
  width: 130%;
`

export const BioText = styled.p`
  font-family: 'Roboto Mono', monospace;
  font-size: 1.75rem;
  flex: 1;
  margin-right: ${MARGIN};

  @media ${PHONE} {
    margin-right: 0;
  }
`

export const ResumeLink = styled(OutboundLink)`
  font-family: 'Roboto Mobo', monospace;
  font-size: 1.75rem;
  color: ${p => p.theme.primary};
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  position: relative;
  padding-bottom: 1rem;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    transform-origin: left;
    background-color: ${p => p.theme.primary};
    transition: 0.3s all;
  }

  svg {
    margin-right: 1rem;
  }
`
