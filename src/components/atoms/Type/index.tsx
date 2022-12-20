import Image from 'next/image';
import { Wrapper } from './styles';

export type TypeProps = {
  type: string;
  color: string;
  src: string;
  alt: string;
};

export function Type({ type, color, src, alt }: TypeProps) {
  return (
    <Wrapper color={color}>
      <Image src={src} alt={`Ícone de ${alt}`} width={16} height={16} />
      {type}
    </Wrapper>
  );
}
