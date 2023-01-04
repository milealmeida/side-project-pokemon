import { screen } from '@testing-library/react';
import { renderWitheTheme } from 'utils/renderWithTheme';
import { Type } from '.';

describe('<Type />', () => {
  it('should be able to get electric type', () => {
    renderWitheTheme(<Type type="electric" />);

    const type = screen.getByText(/electric/i);

    expect(type).toBeTruthy();
  });
});
