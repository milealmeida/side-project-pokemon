import Image from 'next/image';
import { PkmTypesEnum, getFormattedPkmType } from 'utils/getFormattedPkmType';
import { Wrapper } from './styles';

type TypeProps = {
  type: PkmTypesEnum;
};

export function Type({ type }: TypeProps) {
  const { color, src, alt, name } = getFormattedPkmType(type);

  return (
    <Wrapper color={color}>
      <Image src={src} alt={alt} width={16} height={16} />
      {name}
    </Wrapper>
  );
}
