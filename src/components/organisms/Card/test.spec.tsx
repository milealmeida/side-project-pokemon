import { screen } from '@testing-library/react';
import { PokemonV2Type } from 'types';
import { renderWitheTheme } from 'utils/renderWithTheme';
import { Card } from '.';

describe('<Card />', () => {
  it('should be able to render Card Pokemon with Bulbasaur info', () => {
    const pokemonType = [
      {
        pokemon_v2_type: { id: 1, name: 'grass' },
      },
      {
        pokemon_v2_type: { id: 2, name: 'poison' },
      },
    ] as PokemonV2Type;

    renderWitheTheme(
      <Card
        bgColor="#7BCF00"
        height={7}
        weight={69}
        name="Bulbasaur"
        src={1}
        number={1}
        types={pokemonType}
      />,
    );

    const name = screen.getByRole('heading', {
      name: /bulbasaur/i,
    });
    const height = screen.getByText(/0.7 m/i);
    const weight = screen.getByText(/6.9 kg/i);
    const type = screen.getByText(/grass/i);

    expect(name).toBeTruthy();
    expect(height).toBeTruthy();
    expect(weight).toBeTruthy();
    expect(type).toBeTruthy();
  });
});
