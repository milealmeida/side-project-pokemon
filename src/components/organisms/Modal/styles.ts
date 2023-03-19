import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  padding: 3.6rem;
`;

export const Container = styled.div`
  display: flex;
  gap: 18.5rem;
  background: rgba(6, 11, 40, 0.15);
  backdrop-filter: blur(2rem);
  padding: 4rem 7.2rem;
  max-width: 95rem;
  width: 100%;
  border-radius: 1.6rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.div`
  position: absolute;
  top: -15.8rem;
  right: -4rem;
  width: 25.6rem;
  height: 25.6rem;
`;

export const Number = styled.strong`
  font-family: 'Montserrat';
  font-size: 2rem;
  line-height: 2.7rem;
  margin-top: 12.2rem;
`;

export const Title = styled.h1`
  font-family: 'Montserrat';
  font-size: 3.2rem;
  line-height: 4.3rem;
  margin-block: 0.4rem 1.2rem;
`;

export const Types = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const Info = styled.div`
  display: flex;
  gap: 2.6rem;
  margin-top: 2.4rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;

  p {
    font-weight: 400;
    margin: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Divider = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  left: 35rem;
  top: 0;
`;

export const Separator = styled.div`
  width: 0.1rem;
  height: 14.4rem;
  background: rgba(255, 255, 255, 0.25);
`;

export const StatsHeader = styled.div`
  div {
    cursor: pointer;
    position: absolute;
    right: 2.7rem;
    top: 2.7rem;
    transition: all 300ms;
  }

  h2 {
    margin: 0;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 4rem;
  }

  div:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;

export const Stats = styled.div`
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const Statistic = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  font-family: 'Montserrat';
  font-size: 1.6rem;
  line-height: 1.6rem;
`;

export const Bars = styled.div`
  width: 45rem;
  background: ${({ theme }) => theme.colors.gray[400]};
  border-radius: 0.4rem;
`;

export const Bar = styled.div<{ percent: number }>`
  padding-block: 0.4rem;

  &.percent {
    width: ${({ percent }) => (percent > 100 ? '100%' : percent)}%;
    background: ${({ theme }) => theme.colors.green};
    box-shadow: 0 0 1.2rem 0.4rem rgba(28, 216, 14, 0.25);
    border-radius: 0.4rem;
  }
`;
