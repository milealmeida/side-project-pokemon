import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 121.6rem;
  margin-inline: auto;
  color: ${({ theme }) => theme.colors.white};
`;

export const Divider = styled.div`
  margin: 3.6rem auto 20.4rem;
  max-width: 144rem;
  width: 100%;
  height: 0.1rem;
  background: ${({ theme }) => theme.colors.blue[600]};
`;

export const Home = styled.button`
  cursor: pointer;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colors.white};

  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.blue[700]} 0%,
    rgba(21, 26, 55, 0) 100%
  );
  border: 0.1rem solid ${({ theme }) => theme.colors.blue[600]};
  border-radius: 0.8rem;

  display: flex;
  gap: 0.8rem;
  padding: 1.2rem 1.6rem;
  width: fit-content;
  align-items: center;

  transition: opacity 300ms;

  &:hover {
    opacity: 0.6;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.2rem;
  margin-block: 2.4rem 1.6rem;
`;

export const Box = styled.div`
  display: flex;
  gap: 1.6rem;
`;

export const LeftArrow = styled.div`
  cursor: pointer;
  transition: opacity 300ms;

  &:hover {
    opacity: 0.8;
  }
`;

export const RightArrow = styled.a`
  cursor: pointer;
  transition: opacity 300ms;

  &:hover {
    opacity: 0.8;
  }
`;

export const Types = styled.div`
  display: flex;
  gap: 0.8rem;
  max-width: 36.9rem;
  overflow: scroll;
`;
