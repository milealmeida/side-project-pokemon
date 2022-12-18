import Image from 'next/image';
import { Wrapper } from './styles';

import { handleTypes } from './content';

type TypeProps = {
  type: string;
};

export function Type({ type }: TypeProps) {
  const { color, src, alt, name } = handleTypes(type);

  return (
    <Wrapper color={color}>
      <Image src={src} alt={alt} width={16} height={16} />
      {name}
    </Wrapper>
  );
}
