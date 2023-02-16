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
  gap: 4rem;
  background: rgba(6, 11, 40, 0.15);
  backdrop-filter: blur(20px);
  padding: 4rem 7.2rem;
  max-width: 95rem;
  width: 100%;
  border-radius: 1.6rem;
  color: white;
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

export const Number = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
  margin-top: 12.2rem;
`;

export const Title = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 43px;
  color: #ffffff;
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
  font-size: 16px;
  line-height: 24px;

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
