import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1216px;
  margin-inline: auto;
`;

export const Divider = styled.div`
  margin: 3.6rem auto;
  max-width: 144rem;
  width: 100%;
  height: 1px;
  background: #24293f;
`;

export const Link = styled.a`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  background: linear-gradient(180deg, #151a37 0%, rgba(21, 26, 55, 0) 100%);
  border: 1px solid #24293f;
  border-radius: 8px;

  display: flex;
  gap: 0.8rem;
  padding: 1.2rem 1.6rem;
  width: fit-content;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
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
