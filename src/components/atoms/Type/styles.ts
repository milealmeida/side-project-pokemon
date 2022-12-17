import styled from 'styled-components';
import { TypeProps } from '.';

type WrapperProps = Pick<TypeProps, 'color'>;

export const Wrapper = styled.div<WrapperProps>`
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
`;
