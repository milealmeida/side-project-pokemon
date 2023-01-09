import { screen } from '@testing-library/react';
import { renderWitheTheme } from 'utils/renderWithTheme';
import { Footer } from '.';

beforeEach(() => {
  renderWitheTheme(<Footer />);
});

describe('<Footer />', () => {
  it('should be able to render rights', () => {
    const rights = screen.getByText(
      /direitos de imagem para nintendo & the pokémon company/i,
    );

    expect(rights).toBeInTheDocument();
  });

  it('should be able to render author figma and pokeapi links', () => {
    const pokeapi = screen.getByRole('link', {
      name: /pokeapi\.co/i,
    });

    const figmaAuthor = screen.getByRole('link', {
      name: /carlos daniel/i,
    });

    expect(pokeapi).toHaveAttribute('href', 'https://pokeapi.co/');
    expect(figmaAuthor).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/carlosdancr/',
    );
  });

  it('should be able to render social icons and links', () => {
    const linkedin = screen.getByTestId('linkedin');
    const linkedinImg = screen.getByRole('img', {
      name: /logo linkedin/i,
    });

    const github = screen.getByTestId('github');
    const githubImg = screen.getByRole('img', {
      name: /logo github/i,
    });

    expect(linkedin).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/milealmeida/',
    );
    expect(linkedinImg).toHaveAttribute('src', '/img/svg/linkedin.svg');

    expect(github).toHaveAttribute('href', 'https://github.com/milealmeida');
    expect(githubImg).toHaveAttribute('src', '/img/svg/github.svg');
  });
});
