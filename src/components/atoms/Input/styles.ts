import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  border: 0.2rem solid ${({ theme }) => theme.colors.blue[100]};
  border-radius: 0.8rem;
  max-width: 48.8rem;
  width: 100%;
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
  background-color: ${({ theme }) => theme.colors.blue[100]};
  padding: 1.2rem;
`;
