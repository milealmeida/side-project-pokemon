import { fireEvent, screen } from '@testing-library/react';
import { renderWitheTheme } from 'utils/renderWithTheme';
import { InputComponent } from '.';

type TestElementProps = Document | Element | Window | Node;

function hasInputValue(e: TestElementProps, inputValue: string) {
  return screen.getByDisplayValue(inputValue) === e;
}

describe('<Input />', () => {
  it('should be able to fill in the input', () => {
    renderWitheTheme(<InputComponent />);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, {
      target: { value: 'pikachu' },
    });

    expect(hasInputValue(input, 'pikachu')).toBeTruthy();
  });
});
