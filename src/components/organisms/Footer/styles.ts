import styled from 'styled-components';

export const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.blue[800]};
  color: ${({ theme }) => theme.colors.white};
  padding-top: 7.2rem;
`;

export const Container = styled.div`
  max-width: 121.6rem;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.1rem solid ${({ theme }) => theme.colors.blue[600]};
  padding-block: 2.8rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.8rem;

  a {
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: all 300ms ease-in;
  }

  a:hover {
    font-weight: 700;
    text-decoration-color: ${({ theme }) => theme.colors.white};
  }
`;

export const Links = styled.div`
  a {
    transition: all 300ms;
  }

  a:hover {
    opacity: 0.8;
  }
`;
