import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  border: 2px solid #2f5aff;
  border-radius: 0.8rem;
  max-width: 488px;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  padding-inline: 1.6rem;
  background: #060b28;
  border: none;
  border-radius: 0.8rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  line-height: 24px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.25);
  }
`;

export const Container = styled.div`
  background-color: #2f5aff;
  padding: 1.2rem;
`;
