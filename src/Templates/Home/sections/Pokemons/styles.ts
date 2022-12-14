import styled from 'styled-components';

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.blue[800]};
  padding-block: 7.2rem;
  position: relative;
  z-index: 1;
`;

export const Container = styled.div`
  margin-inline: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20rem 3.2rem;
  max-width: 144rem;
  justify-content: center;
  margin-top: 20rem;
`;
