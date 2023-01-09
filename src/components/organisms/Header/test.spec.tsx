import { screen } from '@testing-library/react';
import { renderWitheTheme } from 'utils/renderWithTheme';
import { Header } from '.';

beforeEach(() => {
  renderWitheTheme(<Header />);
});

describe('<Header />', () => {
  it('should be able to get logo and href attribute to home', () => {
    const logo = screen.getByTestId('logo');
    const logoImg = screen.getByRole('img', {
      name: /logo pokémon/i,
    });

    expect(logo.closest('a')).toHaveAttribute('href', '/');
    expect(logoImg).toHaveAttribute('src', '/img/svg/logo-pokemon.svg');
  });

  it('should be able to get linkedin icon and href attribute to personal LinkedIn', () => {
    const linkedin = screen.getByTestId('linkedin');
    const linkedinImg = screen.getByRole('img', {
      name: /logo linkedin/i,
    });

    expect(linkedin.closest('a')).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/milealmeida/',
    );
    expect(linkedinImg).toHaveAttribute('src', '/img/svg/linkedin.svg');
  });

  it('should be able to get github icon and href attribute to personal Github', () => {
    const github = screen.getByTestId('github');
    const githubImg = screen.getByRole('img', {
      name: /logo github/i,
    });

    expect(github.closest('a')).toHaveAttribute(
      'href',
      'https://github.com/milealmeida',
    );
    expect(githubImg).toHaveAttribute('src', '/img/svg/github.svg');
  });
});
