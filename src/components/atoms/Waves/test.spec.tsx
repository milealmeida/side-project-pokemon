import { screen } from '@testing-library/react';
import theme from 'styles/theme';
import { renderWitheTheme } from 'utils/renderWithTheme';
import { Waves } from '.';

describe('Waves', () => {
  it('should be able to compare background color', () => {
    const { container } = renderWitheTheme(<Waves />);

    const background = container.firstChild;
    const bgColor = theme.colors.blue[800];

    expect(background).toHaveStyle(`background: ${bgColor}`);
  });

  it('shoul be able to compare background image', () => {
    renderWitheTheme(<Waves />);

    const image = "url('/img/svg/wave.svg') repeat-x";
    const wave = screen.getByTestId('wave');

    expect(wave).toHaveStyle(`background: ${image}`);
  });

  it('should be able to count waves ', () => {
    const { container } = renderWitheTheme(<Waves />);

    const waves = container.querySelectorAll('.wave').length;

    expect(waves).toEqual(4);
  });
});
