import { PokemonTypes } from 'types';
import { getFormattedPokemonType } from './getFormattedPokemonType';

describe('getFormattedPokemonType', () => {
  it('should be able to pick a eletric pokemon type', () => {
    const electricType = 'eletric';

    const { color, src, alt, name } = getFormattedPokemonType(
      electricType as PokemonTypes,
    );

    expect(color).toEqual('#FFDE00');
    expect(src).toEqual('/img/svg/eletric.svg');
    expect(alt).toEqual('Ícone de raio');
    expect(name).toEqual('Eletric');
  });
});
