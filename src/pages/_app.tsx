import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'graphql/apollo-client';

import GlobalStyle from 'styles/global';
import theme from 'styles/theme';
import PokemonProvider from 'context/pokemonsContext';

export default function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <PokemonProvider>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>Pokemon Web</title>
          </Head>

          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </PokemonProvider>
  );
}
