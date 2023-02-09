import styled from 'styled-components';

type WrapperProps = {
  color: string;
};

export const Wrapper = styled.div<WrapperProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background-color: ${({ color }) => color};
  padding: 0.4rem 0.8rem;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 400;
  width: fit-content;
  color: ${({ theme }) => theme.colors.white};
  transition: opacity 300ms;

  &:hover {
    opacity: 0.8;
  }
`;
