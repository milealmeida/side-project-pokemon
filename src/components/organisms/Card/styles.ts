import styled from 'styled-components';
import { CardProps } from '.';

type BgColorProps = Pick<CardProps, 'bgColor'>;

export const Wrapper = styled.div<BgColorProps>`
  position: relative;
  max-width: 384px;
  width: 100%;
  background: rgba(6, 11, 40, 0.15);
  border: 1px solid #24293f;
  border-radius: 24px;
  text-align: center;
  color: #ffffff;

  .pokemon {
    position: absolute;
    top: -17.2rem;
    right: 5rem;
  }

  &::before {
    content: '';
    display: block;
    width: 12.5rem;
    height: 12.5rem;
    background: ${({ bgColor }) => bgColor};
    filter: blur(128px);
    position: absolute;
    top: 10rem;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.8s ease 0s;
  }
`;

export const Number = styled.span`
  display: block;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  margin-top: 11.2rem;
`;

export const Name = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 43px;
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
  font-size: 16px;
  line-height: 24px;

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
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  background: ${({ bgColor }) => bgColor};
  border: none;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  padding-block: 1.2rem;
  border-radius: 0px 0px 24px 24px;
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
