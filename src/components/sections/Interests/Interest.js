import styled from 'styled-components'
import { PHONE } from '../../../styles/responsive'

const Interest = styled.p`
  font-size: 1.4rem;
  color: #303030;
  display: inline-block;
  margin: 0px 2rem;
  font-family: 'Roboto Mono', monospace;
  position: relative;

  &:not(:last-child)::before {
    height: 2px;
    background: #303030;
    content: '';
    position: absolute;
    width: 1rem;
    top: 50%;
    transform: translateY(-50%);
    right: -2.5rem;
  }

  @media ${PHONE} {
    flex: 0 0 100%;
    text-align: center;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
    /* width: 100%; */

    &:not(:last-child)::before {
      content: none;
    }
  }
`

export default Interest
