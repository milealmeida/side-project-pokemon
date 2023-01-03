import { ReactNode } from 'react';

import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockReturnValue(() => ({ pathname: '/' }));

export const renderWitheTheme = (children: ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
