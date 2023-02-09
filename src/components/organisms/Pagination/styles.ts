import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 4rem;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.blue[800]};
  padding: 1.2rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.8rem;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.6rem;
  transition: opacity 300ms;

  &.selected {
    background-color: ${({ theme }) => theme.colors.blue[100]};
  }

  &:hover {
    opacity: 0.8;
    background-color: ${({ theme }) => theme.colors.blue[100]};
  }
`;
