import Image from 'next/image';
import { Wrapper } from './styles';

type ButtonProps = {
  text: string;
};

export function Button({ text }: ButtonProps) {
  return (
    <Wrapper>
      <Image
        src="/img/svg/bolt.svg"
        alt="Ícone de raio"
        width={24}
        height={24}
      />
      {text}
    </Wrapper>
  );
}
