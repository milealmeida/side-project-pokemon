import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: auto;
  padding: 2.4rem;
  max-width: 120rem;
`;

export const Link = styled.a`
  &:hover {
    opacity: 0.8;
  }
`;
