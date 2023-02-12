import styled, { keyframes } from 'styled-components';

const ellipsis1 = keyframes`
 0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const ellipsis2 = keyframes`
 0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(2.4rem, 0);
  }
`;

const ellipsis3 = keyframes`
 0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 8rem;
  height: 8rem;
`;

export const Ellipsis = styled.div`
  position: absolute;
  top: 3.3rem;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  animation-timing-function: cubic-bezier(0, 1, 1, 0);

  &.one {
    left: 0.8rem;
    animation: ${ellipsis1} 0.6s infinite;
  }

  &.two {
    left: 0.8rem;
    animation: ${ellipsis2} 0.6s infinite;
  }

  &.three {
    left: 3.2rem;
    animation: ${ellipsis3} 0.6s infinite;
  }

  &.four {
    left: 5.6rem;
    animation: ${ellipsis3} 0.6s infinite;
  }
`;
