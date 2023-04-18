import styled from 'styled-components';

export const NotFound = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.blue[700]} 0%,
    rgba(21, 26, 55, 0) 100%
  );
  border: 0.1rem solid ${({ theme }) => theme.colors.blue[600]};
  border-radius: 0.8rem;
  padding: 1.2rem 1.6rem;
  margin-bottom: 10rem;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colors.white};
`;
