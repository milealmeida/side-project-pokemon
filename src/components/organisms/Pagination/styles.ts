import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 4rem;
`;

export const Button = styled.button`
  background-color: #060b28;
  padding: 1.2rem;
  border: 0.2rem solid #ffffff;
  color: #ffffff;
  border-radius: 0.8rem;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.6rem;

  &.selected {
    background-color: #2f5aff;
  }
`;
