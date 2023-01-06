import { screen } from '@testing-library/react';
import { renderWitheTheme } from 'utils/renderWithTheme';
import { SearchBar } from '.';

beforeEach(() => {
  renderWitheTheme(<SearchBar />);
});

describe('<SearchBar />', () => {
  it('should be able to render link to home', () => {
    const home = screen.getByRole('link', {
      name: /ícone de uma casa início/i,
    });

    expect(home).toHaveAttribute('href', '/');
  });

  it('should be able to render starter types', () => {
    const fire = screen.getByRole('img', {
      name: /ícone de fogo/i,
    });

    const water = screen.getByRole('img', {
      name: /ícone de uma gota d'água/i,
    });

    const grass = screen.getByRole('img', {
      name: /ícone de uma folha/i,
    });

    expect(fire).toBeTruthy();
    expect(water).toBeTruthy();
    expect(grass).toBeTruthy();
  });
});
