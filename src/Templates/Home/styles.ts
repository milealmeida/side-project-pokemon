import styled from 'styled-components';

type TypeProps = {
  color: string;
};

export const Wrapper = styled.section`
  background: linear-gradient(180deg, #ee8328 0%, #e14318 100%);

  &::after {
    content: '';
    background: url();
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 70px 24px;
`;

export const Content = styled.div`
  color: #ffffff;
  max-width: 416px;
`;

export const Number = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`;

export const Types = styled.div`
  display: flex;
  gap: 8px;
  margin-block: 8px;
`;

export const Type = styled.div<TypeProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${({ color }) => color};
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 24px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 64px;
  line-height: 86px;
  margin: 0;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin-block: 0 24px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 12px 133px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* --color-orange-1 */
  color: #e14318;
`;

export const Box = styled.div``;

export const Divider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const Teste1 = styled.div`
  width: 1px;
  height: 212px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
`;

export const Teste2 = styled.div`
  width: 1px;
  height: 212px;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
`;
