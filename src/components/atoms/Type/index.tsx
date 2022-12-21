import Image from 'next/image';
import { PokemonTypes } from 'types/pokemonTypes';
import { getFormattedPokemonType } from 'utils/getFormattedPokemonType';
import { Wrapper } from './styles';

type TypeProps = {
  type: PokemonTypes;
};

export function Type({ type }: TypeProps) {
  const { color, src, alt, name } = getFormattedPokemonType(type);

  return (
    <Wrapper color={color}>
      <Image src={src} alt={alt} width={16} height={16} />
      {name}
    </Wrapper>
  );
}
