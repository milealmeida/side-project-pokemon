import { screen } from '@testing-library/react';
import { renderWitheTheme } from 'utils/renderWithTheme';
import { Hero } from '.';

beforeEach(() => {
  renderWitheTheme(<Hero />);
});

describe('<Hero />', () => {
  it('should be able to render heading', () => {
    const heading = screen.getByRole('heading', {
      name: /charizard/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('should be able to render text', () => {
    const text = screen.getByText(
      /charizard se assemelha a um grande tradicional dragão europeu. apesar da semelhança, charizard é explicitamente um pokémon dos tipos fogo e voador, e não um tipo dragão, exceto em sua forma "mega charizard x"; no entanto, ele pode aprender ataques do tipo dragão./i,
    );

    expect(text).toBeInTheDocument();
  });

  it('should be able to get width attribute in charizard img', () => {
    const imgCharizard = screen.getByRole('img', {
      name: /charizard/i,
    });

    expect(imgCharizard).toHaveAttribute('width', '488');
  });
});
