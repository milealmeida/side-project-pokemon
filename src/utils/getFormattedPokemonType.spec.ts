import { PokemonTypes } from 'types';
import { getFormattedPokemonType } from './getFormattedPokemonType';

describe('getFormattedPokemonType', () => {
  it('should be able to pick a electric pokemon type', () => {
    const electricType = 'electric';

    const { color, src, alt, name } = getFormattedPokemonType(
      electricType as PokemonTypes,
    );

    expect(color).toEqual('#FFDE00');
    expect(src).toEqual('/img/svg/electric.svg');
    expect(alt).toEqual('Ícone de raio');
    expect(name).toEqual('Electric');
  });
});
