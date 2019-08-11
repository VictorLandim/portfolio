import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  & {
    position: fixed;
    top: 0;
    left: 0;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20rem;
    background-color: red;
  }

  input {
    appearance: none;
  }

  label {
    position: fixed;
    top: 1.5rem;
    left: 1.5rem;
    font-size: 3rem;
    cursor: pointer;
    opacity: 0.5;
    transition: 0.3s all;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default () => (
  <Nav>
    <input type="checkbox" id="hamburguer" />
    <label htmlFor="hamburguer">
      <span role="img" aria-label="hamburguer icon">
        🍔
      </span>
    </label>
    <ul>
      <li>
        <a>Bio</a>
      </li>
      <li>
        <a>Projects</a>
      </li>
      <li>
        <a>Interests</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </ul>
  </Nav>
);
