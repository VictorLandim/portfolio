import styled from 'styled-components';
import { PHONE, TAB_LAND, TAB_PORT, LARGE_DESKTOP } from '../styles/responsive';

export const Container = styled.div`
  max-width: ${props => {
    if (props.size === 'fluid') return '100%';
    if (props.size === 'S') return props.theme.containerWidthS;
    if (props.size === 'xs') return props.theme.containerWidthXs;

    return props.theme.containerWidth;
  }};

  padding-top: ${({ padTop }) => padTop && '3.5rem'};
  padding-bottom: ${({ padBot }) => padBot && '3.5rem'};

  margin-left: auto;
  margin-right: auto;

  @media ${TAB_LAND} {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media ${PHONE} {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`;

export const Row = styled.div`
  &::after {
    content: '';
    clear: both;
    display: table;
  }
`;

const getWidth = s => `width: ${(s / 12) * 100}%`;

export const Col = styled.div`
  float: left;
  width: 100%;

  @media ${PHONE} {
    width: ${({ size }) => (size ? getWidth(size) : 8.33)}%;

    ${({ xs }) => (xs ? getWidth(xs) : 'width: 100%')};

    @media ${TAB_LAND} {
      ${({ sm }) => sm && getWidth(sm)};
    }

    @media ${TAB_PORT} {
      ${({ md }) => md && getWidth(md)};
    }

    @media ${LARGE_DESKTOP} {
      ${({ lg }) => lg && getWidth(lg)};
    }
  }
`;
