import styled from 'styled-components'

export const ProjectsContainer = styled.section`
  /* min-height: 100vh; */
  /* background-image: linear-gradient(
    to bottom right,
    ${p => p.theme.lightGray} 85%,
    ${p => p.theme.primary} 85%,
    ${p => p.theme.primary} 100%,
    ${p => p.theme.lightGray} 100%
  ); */

  position: relative;
  background-color: ${p => p.theme.lightGray};
  
  &:before {
    /* content: ${'""'}; */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(
      to bottom right,  
      ${p => p.theme.lightGray} 45%,
      ${p => p.theme.primary} 45%,
      ${p => p.theme.primary} 50%,
      ${p => p.theme.lightGray} 50%
    );
  }
`
