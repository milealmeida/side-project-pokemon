import styled from 'styled-components';

export const Ocean = styled.div`
  height: 5%;
  position: absolute;
  bottom: -10rem;
  left: 0;
  background: ${({ theme }) => theme.colors.blue[800]};
`;

export const Wave = styled.div`
  background: url('/img/svg/wave.svg') repeat-x;
  position: absolute;
  top: -19.8rem;
  width: 640rem;
  height: 19.8rem;
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);

  &:nth-of-type(2) {
    top: -17.5rem;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
      swell 7s ease -1.25s infinite;
    opacity: 1;
  }

  &:nth-of-type(3) {
    top: -20rem;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -1s infinite,
      swell 7s ease -1.25s infinite;
    opacity: 1;
  }

  &:nth-of-type(4) {
    top: -15rem;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -2s infinite,
      swell 7s ease -1.25s infinite;
    opacity: 1;
  }

  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -160rem;
    }
  }

  @keyframes swell {
    0%,
    100% {
      transform: translate3d(0, -2.5rem, 0);
    }
    50% {
      transform: translate3d(0, 0.5rem, 0);
    }
  }
`;
