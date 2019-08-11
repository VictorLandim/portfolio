import React from 'react';
import styled from 'styled-components';
import { PHONE } from '../styles/responsive';

const Interest = styled.p`
  font-size: 2rem;
  color: #303030;
  display: inline-block;
  margin: 0px 2rem;
  font-family: monospace;
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
    flex: 1;
    width: 100%;

    &:not(:last-child)::before {
      content: none;
    }
  }
`;

export default Interest;
