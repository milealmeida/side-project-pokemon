import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  border: 0.2rem solid ${({ theme }) => theme.colors.blue[100]};
  border-radius: 0.8rem;
  max-width: 48.8rem;
  width: 100%;
  transition: box-shadow 300ms;

  &:hover {
    -webkit-box-shadow: 0 0 2.9rem -0.9rem ${({ theme }) => theme.colors.blue[100]};
    -moz-box-shadow: 0 0 2.9rem -0.9rem ${({ theme }) => theme.colors.blue[100]};
    box-shadow: 0 0 2.9rem -0.9rem ${({ theme }) => theme.colors.blue[100]};
  }
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  padding-inline: 1.6rem;
  background: ${({ theme }) => theme.colors.blue[800]};
  border: none;
  border-radius: 0.8rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  line-height: 2.4rem;

  &::placeholder {
    color: rgba(255, 255, 255, 0.25);
  }
`;

export const Container = styled.div`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  padding: 1.2rem;
  transition: opacity 300ms;

  &:hover {
    opacity: 0.8;
  }
`;
