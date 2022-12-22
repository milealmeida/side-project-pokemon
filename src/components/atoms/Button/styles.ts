import styled from 'styled-components';

export const Wrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 0.8rem;
  padding: 1.2rem 13.3rem;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colors.orange[500]};
  transition: 300ms background;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.orange[600]};
    background-color: ${({ theme }) => theme.colors.gray[100]};

    img {
      filter: brightness(0) saturate(100%) invert(21%) sepia(94%)
        saturate(2223%) hue-rotate(12deg) brightness(95%) contrast(89%);
    }
  }
`;
