import styled from 'styled-components';
import { CardProps } from '.';

type BgColorProps = Pick<CardProps, 'bgColor'>;

export const Wrapper = styled.div`
  position: relative;
  max-width: 38.4rem;
  width: 100%;
  background: rgba(6, 11, 40, 0.15);
  border: 0.1rem solid ${({ theme }) => theme.colors.blue[600]};
  border-radius: 2.4rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};

  .pokemon {
    position: absolute;
    top: -17.2rem;
    right: 5rem;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
`;

export const Blur = styled.div<BgColorProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 2.4rem;

  z-index: 0;

  &::before {
    content: '';
    display: block;
    width: 12.5rem;
    height: 12.5rem;
    background: ${({ bgColor }) => bgColor};
    filter: blur(12.8rem);
    position: absolute;
    top: 10rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Number = styled.span`
  display: block;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.7rem;
  margin-top: 11.2rem;
`;

export const Name = styled.h1`
  text-transform: capitalize;
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 4.3rem;
  margin: 0.4rem 0 1.2rem 0;
`;

export const Types = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.4rem;
`;

export const Info = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;

  display: flex;
  flex-direction: column;
  margin-block: 2.4rem 3.2rem;

  strong {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

export const Details = styled.button<BgColorProps>`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ bgColor }) => bgColor};
  border: none;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  padding-block: 1.2rem;
  border-radius: 0 0 2.4rem 2.4rem;
  cursor: pointer;
  transition: all 300ms;

  &:hover {
    filter: brightness(85%);
  }

  img {
    filter: brightness(0) saturate(100%) invert(100%) sepia(8%) saturate(0%)
      hue-rotate(75deg) brightness(108%) contrast(108%);
  }
`;
