import styled from 'styled-components'

export default styled.h2`
  position: relative;
  text-align: center;
  display: inline-block;
  padding-bottom: 0.7rem;
  font-size: 2.5rem;
  font-weight: 700;
  font-family: 'Major Mono Display';
  padding-bottom: 1rem;
  margin-bottom: 3rem;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 20rem;
    background-color: ${props => props.theme.black};
  }
`
