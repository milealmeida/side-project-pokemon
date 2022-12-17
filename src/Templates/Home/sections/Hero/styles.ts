import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.orange[400]} 0%,
    ${({ theme }) => theme.colors.orange[500]} 100%
  );

  &::before {
    position: absolute;
    top: 17rem;
    left: 0;
    content: '';
    width: 20rem;
    height: 40rem;
    background: url('./img/svg/bg-pokeball.svg') no-repeat;
    transform: rotate(180deg);
  }

  &::after {
    position: absolute;
    top: 17rem;
    right: 0;
    content: '';
    width: 20rem;
    height: 40rem;
    background: url('./img/svg/bg-pokeball.svg') no-repeat;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 7rem 2.4rem;
  max-width: 120rem;
  margin-inline: auto;
`;

export const Content = styled.div`
  color: ${({ theme }) => theme.colors.white};
  max-width: 41.6rem;
`;

export const Number = styled.span`
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.2rem;
`;

export const Types = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-block: 0.8rem;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 6.4rem;
  line-height: 8.6rem;
  margin: 0;
`;

export const Text = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin-block: 0 2.4rem;
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 0.8rem;
  padding: 1.2rem 13.3rem;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colors.orange[500]};
  transition: 300ms background;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.orange[600]};
    background-color: ${({ theme }) => theme.colors.gray[100]};

    img {
      filter: brightness(0) saturate(100%) invert(21%) sepia(94%)
        saturate(2223%) hue-rotate(12deg) brightness(95%) contrast(89%);
    }
  }
`;

export const Box = styled.div``;

export const Divider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`;

export const DividerUp = styled.div`
  width: 0.1rem;
  height: 21.2rem;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    ${({ theme }) => theme.colors.white} 100%
  );
`;

export const DividerDown = styled.div`
  width: 0.1rem;
  height: 21.2rem;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.white} 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;
