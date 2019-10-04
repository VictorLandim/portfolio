import styled from 'styled-components'

import { PHONE } from '../../../styles/responsive'

export const ToolContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > * {
    margin: 0 1rem;

    @media ${PHONE} {
      margin-bottom: 1rem;
    }
  }
`
