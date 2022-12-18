import styled from 'styled-components';

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.blue[800]};
  padding-block: 7.2rem;
`;

export const Container = styled.div`
  margin-inline: auto;
  display: flex;
  gap: 3.2rem;
  max-width: 144rem;
  justify-content: center;
  margin-top: 20rem;
`;
