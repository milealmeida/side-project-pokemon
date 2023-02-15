import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  padding: 3.6rem;
`;

export const Container = styled.div`
  display: flex;
  gap: 4rem;
  background-color: rgba(0, 0, 0, 0.5);
  max-width: 95rem;
  width: 100%;
  border-radius: 1.6rem;
  color: white;
`;
