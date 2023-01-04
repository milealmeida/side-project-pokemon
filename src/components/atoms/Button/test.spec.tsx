import { fireEvent, screen } from '@testing-library/react';

import { renderWitheTheme } from 'utils/renderWithTheme';
import { Button } from '.';

test('home renders correctly', () => {
  renderWitheTheme(<Button text="Test Button" />);

  const button = screen.getByText(/test button/i);

  expect(button).toBeTruthy();

  fireEvent.click(button);
});
