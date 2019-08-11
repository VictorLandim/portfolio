import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  color: #fff;
  background-color: ${p => p.theme.primary};
  padding: 2rem 0;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 1.8rem;
  font-family: monospace;
`;

export default () => (
  <Footer>{`© ${new Date().getFullYear()}, 💻 with ❤ by Victor Landim.`}</Footer>
);
